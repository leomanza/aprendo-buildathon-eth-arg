import { Module } from '@nestjs/common';
import { QuestService } from './quest.service';
import { QuestController } from './quest.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestSchema } from './schemas/quest.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Quest', schema: QuestSchema }])],
  providers: [QuestService],
  controllers: [QuestController]
})
export class QuestModule {}
