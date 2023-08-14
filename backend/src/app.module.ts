import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONEXION_STRING } from '../enviroment.json';
import { PoapModule } from './poap/poap.module';
import { QuestModule } from './quest/quest.module';
@Module({
  imports: [UserModule, MongooseModule.forRoot(DATABASE_CONEXION_STRING), PoapModule, QuestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
