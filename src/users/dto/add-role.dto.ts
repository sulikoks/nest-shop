import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 10, description: 'User ID' })
  readonly userId: number;
  @ApiProperty({ example: 'USER', description: 'Role value: ADMIN, USER etc.' })
  readonly value: string;
}
