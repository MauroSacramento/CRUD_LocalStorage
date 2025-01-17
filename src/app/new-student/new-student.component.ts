import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-student',
  imports: [],
  templateUrl: './new-student.component.html',
  styleUrl: './new-student.component.css'
})
export class NewStudentComponent {
 @Output() cancel = new EventEmitter<void>();

 onCancel(){
  this.cancel.emit();
 }
}
