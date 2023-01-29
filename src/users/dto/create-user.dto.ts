import { IsNotEmpty, MinLength, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(5)
  login: string;

  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @Matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
  @MinLength(8)
  @IsNotEmpty()
  password: string;
}
