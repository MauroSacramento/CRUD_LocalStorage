import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewStudentComponent } from './new-student/new-student.component';
import { StudentListComponent } from "./student-list/student-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewStudentComponent, StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud_local';
  isAddStudent:boolean = false;

  onAddStudent(){5
    this.isAddStudent = true;
  }

  onCloseAddStudent(){
    this.isAddStudent = false;
  }
}
