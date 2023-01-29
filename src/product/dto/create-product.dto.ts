import { IsNotEmpty, MinLength, IsPositive } from 'class-validator';
export class CreateProductDto {
  @IsNotEmpty()
  @MinLength(8)
  name: string;

  @IsNotEmpty()
  @IsPositive()
  price: number;
}
