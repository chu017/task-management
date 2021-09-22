import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @ApiProperty({ example: 'user1' })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @ApiProperty({ example: 'Password1' })
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'password is too weak, it need contain at least 1 upper case letter, 1 lower case letter, and 1 number or special character',
  })
  password: string;
}
