import { IsNotEmpty } from 'class-validator';

export class CreateTaskDtos {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
