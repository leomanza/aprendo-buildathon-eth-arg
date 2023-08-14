import { Module } from '@nestjs/common';
import { PoapController } from './poap.controller';
import { PoapService } from './poap.service';

@Module({
  controllers: [PoapController],
  providers: [PoapService]
})
export class PoapModule {}
