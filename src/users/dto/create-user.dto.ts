import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'test@test.com', description: 'User email' })
  readonly email: string;
  @ApiProperty({ example: 'asd123', description: 'User password' })
  readonly password: string;
}
