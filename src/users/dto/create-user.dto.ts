import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: '+998972411997', description: 'Phone' })
  readonly phone: string;
  @ApiProperty({ example: '12345', description: 'Password' })
  readonly password: string;
  @ApiProperty({ example: 'Azamat', description: 'Firstname' })
  readonly firstname: string;
  @ApiProperty({ example: 'Berdimuratov', description: 'Lastname' })
  readonly lastname: string;
  @ApiProperty({ example: 'lexoice1997@gmail.com', description: 'Email' })
  readonly email: string;
  @ApiProperty({ example: 'I am 29 years old.', description: 'About' })
  readonly about?: string;
  @ApiProperty({ example: '1', description: 'Region id' })
  readonly regionId?: string;
  @ApiProperty({ example: 'png.jpg', description: 'Avatar' })
  readonly avatar?: string;
  @ApiProperty({ example: '3 years', description: 'Experience' })
  readonly experience?: string;
  @ApiProperty({ example: '1', description: 'Category id' })
  readonly categoryId?: string;
  @ApiProperty({ example: '[1, 2, 3]', description: 'Subcategory ids' })
  readonly subcategoriesId?: string[];
  @ApiProperty({ example: 'false', description: 'Banned' })
  readonly banned?: boolean;
  @ApiProperty({ example: 'For ...', description: 'Ban reason' })
  readonly banReason?: string;
}
