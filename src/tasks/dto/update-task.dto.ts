import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskStatusDto {
  @ApiProperty({ example: 'IN_PROGRESS' })
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
