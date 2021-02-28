import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Task} from '../models/task';
import {Subtask} from '../models/subtask';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit, OnChanges {


  @Input() task: Task;
  todo = [];
  done = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.task.subtasks.length === 0) {
      console.log(this.task.subtasks);
      this.todo = [];
      this.done = [];
    }
    for (const subtask of this.task.subtasks) {
      if (subtask.status) {
        this.done.push(subtask);
      } else {
        this.todo.push(subtask);
      }
    }
  }

  drop(event: CdkDragDrop<Subtask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      event.container.data[event.currentIndex].status = !event.container.data[event.currentIndex].status;
    }
  }
}
