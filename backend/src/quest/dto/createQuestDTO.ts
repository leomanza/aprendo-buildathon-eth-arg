import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestDTO {
  @ApiProperty({ example: 'Envio CV' })
  readonly nameQuest: string;
  readonly createdat: Date;
}
