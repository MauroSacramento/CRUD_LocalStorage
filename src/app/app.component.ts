import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewStudentComponent } from './new-student/new-student.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud_local';
  isAddStudent:boolean = false;

  onAddStudent(){
    this.isAddStudent = true;
  }

  onCloseAddStudent(){
    this.isAddStudent = false;
  }
}
