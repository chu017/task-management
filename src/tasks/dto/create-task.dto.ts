import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'clean a room' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'it has a lot to clean' })
  @IsNotEmpty()
  description: string;
}
