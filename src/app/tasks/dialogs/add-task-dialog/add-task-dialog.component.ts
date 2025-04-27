import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../../core/models/task.model';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-task-dialog',
  imports: [MatSelectModule,MatDialogModule,MatInputModule,FormsModule,MatButtonModule],
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.scss'
})
export class AddTaskDialogComponent {
  task: Task = {
    title: '',
    description: '',
    status:'To Do'
  };

  constructor(public dialogRef: MatDialogRef<AddTaskDialogComponent>) {}

  save() {
    this.dialogRef.close(this.task);
  }

  close() {
    this.dialogRef.close();
  }
}
