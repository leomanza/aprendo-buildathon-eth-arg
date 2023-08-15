import {
  Controller,
  Post,
  Get,
  Put,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
  Delete,
  Query,
} from '@nestjs/common';
import { QuestService } from './quest.service';
import { CreateQuestDTO } from './dto/createQuestDTO';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('quest')
@Controller('quest')
export class QuestController {
  constructor(private questService: QuestService) {}

  @Post('/create')
  async createUser(@Res() res, @Body() createQuestDTO: CreateQuestDTO) {
    try {
      const quest = await this.questService.createQuest(createQuestDTO);
      return res.status(HttpStatus.OK).json({
        message: 'POAP created',
        quest,
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get('/getById/:idQuest')
  async getById(@Res() res, @Param('idQuest') idQuest: string) {
    try {
      const quest = await this.questService.getById(idQuest);
      if (!quest) throw new NotFoundException('Quest Does not exists');
      return res.status(HttpStatus.OK).json(quest);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
