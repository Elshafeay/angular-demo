import { Component, Input } from '@angular/core';
import { IProduct, ITask } from './interface';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks: ITask[] = [];
  taskText = "";
  products: IProduct[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(){
    this.tasks = this.taskService.getTasks();
    this.taskService.fetchProducts().subscribe(res => this.products = res.products)
  }

  createTask(){
    if(this.taskText.length >= 2){
      this.taskService.createTask(this.taskText);
      this.taskText = "";
    }
  }

  completeTask(id: number){
    this.taskService.completeTask(id);
  }
}
