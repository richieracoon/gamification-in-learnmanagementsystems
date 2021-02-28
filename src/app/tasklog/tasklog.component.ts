import {Component, OnInit} from '@angular/core';
import {Task} from '../models/task';
import {Subtask} from '../models/subtask';

@Component({
  selector: 'app-tasklog',
  templateUrl: './tasklog.component.html',
  styleUrls: ['./tasklog.component.css']
})
export class TasklogComponent implements OnInit {

  tasks: Task[] = [];
  subtasks: Subtask[] = [];
  chosenTask: Task = {taskID: 0, title: '', description: '', subtasks: this.subtasks};
  eroertungTasks: Subtask[] = [
    {
      subtaskID: 0,
      title: 'Argumente finden',
      description: 'Suche im gegebenen Text nach Argumenten und unstreiche diese.',
      status: false
    },
    {
      subtaskID: 1,
      title: 'Argumentation erschließen',
      description: 'Schreibe alle Argumente auf und suche im Text nach Beispielen und Belegen',
      status: false
    },
    {
      subtaskID: 2,
      title: 'zur textgebundenen Erörterung verschriftlichen',
      description: 'Aufbau der Erörterung mit Einleitung, Hauptteil, Schluss',
      status: false
    },
    {
      subtaskID: 3,
      title: 'Kontrolle',
      description: 'Den Text auf die wichtigsten Merkmale, Rechtschreibung und Zeichensetzung kontrollieren.',
      status: false
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.createSampleData();
  }

  createSampleData(): void {
    const task1: Task = {
      taskID: 1,
      title: 'Erörterung',
      description: 'Schreibe eine textgebundene Erörterung',
      subtasks: this.eroertungTasks
    };
    const task2: Task = {
      taskID: 2,
      title: 'Stillleben zeichnen',
      description: 'Suche dir Obst aus und zeichne ein Stillleben.',
      subtasks: []
    };
    // tslint:disable-next-line:max-line-length
    const task3: Task = {
      taskID: 3,
      title: 'Jahrszeitengedicht schreiben',
      description: 'Schreibe ein Gedicht über deine Lieblingsjahreszeit',
      subtasks: []
    };
    this.tasks.push(task1, task2, task3);
    this.chosenTask = task1;
  }
}
