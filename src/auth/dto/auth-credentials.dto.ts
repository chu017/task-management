import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @ApiProperty({ example: 'user1' })
  username: string;

  @ApiProperty({ example: 'password' })
  password: string;
}
