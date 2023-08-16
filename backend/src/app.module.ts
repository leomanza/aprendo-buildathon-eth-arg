import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PoapModule } from './poap/poap.module';
import { QuestModule } from './quest/quest.module';
import 'dotenv/config';
@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(process.env.DATABASE_CONEXION_STRING),
    PoapModule,
    QuestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
