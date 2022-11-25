import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from './interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: ITask[] = [];

  constructor(private httpClient: HttpClient) {}

  getTasks(){
    return this.tasks;
  }

  createTask(text: string){
    const task: ITask = {
      id: this.tasks.length + 1,
      name: text,
      createdAt: new Date(),
      isFinished: false,
    }

    this.tasks.push(task);
  }

  completeTask(id: number){
    this.tasks.forEach(task => {
      if (task.id === id) {
        task.isFinished = true;
      }
    })
  }

  fetchProducts(): Observable<any> {
    return this.httpClient.get('https://dummyjson.com/products');
  }
}
