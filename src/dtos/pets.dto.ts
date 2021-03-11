import { IsString } from 'class-validator';

export class CreatePetDto {
  @IsString()
  public type: string;

  @IsString()
  public name: string;
}
