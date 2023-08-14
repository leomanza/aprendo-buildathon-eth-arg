import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Quest } from './interfaces/quest.interface';
import { CreateQuestDTO } from './dto/createQuestDTO';

@Injectable()
export class QuestService {
  constructor(@InjectModel('Quest') private questModel: Model<Quest>) {}

  async createQuest(createQuestDTO: CreateQuestDTO): Promise<Quest> {
    const poap = new this.questModel(createQuestDTO);
    return await poap.save();
  }

  async getById(idQuest: string): Promise<Quest> {
    const poap = this.questModel.findById(idQuest);
    return poap;
  }
}
