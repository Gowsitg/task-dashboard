import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CdkDragDrop, DragDropModule, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { Task } from '../../../core/models/task.model';
import { AddTaskDialogComponent } from '../../dialogs/add-task-dialog/add-task-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-task-board',
  imports: [MatButtonModule, MatTooltipModule,DragDropModule,MatIconModule, MatDialogModule, CommonModule,HttpClientModule],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.scss',
})
export class TaskBoardComponent implements OnInit {
  todo: Task[] = [];
  inProgress: Task[] = [];
  done: Task[] = [];
  public status: any;

  readonly apiUrl = 'http://localhost:3000/tasks';

  constructor( private dialog: MatDialog,private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.getTasks().subscribe(tasks => {
      this.todo = tasks.filter(t => t.status === 'To Do');
      this.inProgress = tasks.filter(t => t.status === 'In Progress');
      this.done = tasks.filter(t => t.status === 'Done');
    });
  }

  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addTask(result).subscribe(() => this.loadTasks());
      }
    });
  }

  delete(id: any) {
      this.deleteTask(id).subscribe(
        (response) => {
          this.loadTasks();
         });
  }


  drop(event: CdkDragDrop<Task[]>) {
    const task = event.previousContainer.data[event.previousIndex];

    if (event.container.id === 'cdk-drop-list-3') {
      this.status = 'To Do';
    } else if (event.container.id === 'cdk-drop-list-4') {
      this.status = 'In Progress';
    } else if (event.container.id === 'cdk-drop-list-5') {
      this.status = 'Done';
    }
    if(this.status) {
      task.status = this.status;
      console.log(task)
      this.updateTask(task).subscribe(() => {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );  
      });

    }

  }
  

    getTasks(): Observable<Task[]> {
      return this.http.get<Task[]>(this.apiUrl);
    }
  
    addTask(task: Task): Observable<Task> {
      return this.http.post<Task>(this.apiUrl, task);
    }
  
      updateTask(task: Task): Observable<Task> {
        return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
      }
  
      deleteTask(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
      }
      
}
