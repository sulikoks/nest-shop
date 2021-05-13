import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'USER', description: 'New role for users' })
  readonly value: string;
  @ApiProperty({
    example: 'Role for common user',
    description: 'Description for role',
  })
  readonly description: string;
}
