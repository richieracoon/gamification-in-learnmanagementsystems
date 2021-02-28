import {Subtask} from './subtask';

export interface Task{
  taskID: number;
  title: string;
  description: string;
  subtasks: Subtask[];
}
