import { TaskStatus } from '../task-status.enum';

export class UpdateStatusDtos {
  id: string;
  status: TaskStatus;
}
