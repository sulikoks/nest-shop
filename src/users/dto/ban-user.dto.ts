import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: 10, description: 'User ID' })
  @IsNumber({}, { message: 'Should be number' })
  readonly userId: number;
  @ApiProperty({ example: true, description: 'User banned or not' })
  @IsBoolean({ message: 'Should be boolean' })
  readonly banned: boolean;
  @ApiProperty({ example: 'User is jerk', description: 'Ban reason' })
  @IsString({ message: 'Should be string' })
  readonly banReason?: string;
}
