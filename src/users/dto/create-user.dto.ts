import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'test@test.com', description: 'User email' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Should be a email' })
  readonly email: string;

  @ApiProperty({
    example: 'asd123',
    description: 'User password',
    minLength: 6,
    maxLength: 16,
  })
  @IsString({ message: 'Should be a string' })
  @Length(6, 16, { message: 'Password should be 6-16 length' })
  readonly password: string;
}
