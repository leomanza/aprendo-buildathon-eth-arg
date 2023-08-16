import { ApiProperty } from '@nestjs/swagger';

export class CreatePoapDTO {
  @ApiProperty({ example: '3010642' })
  readonly idPoap: string;
  @ApiProperty({ example: 'Prueba POAP' })
  readonly namePoap: string;
  readonly createdat: Date;
}
