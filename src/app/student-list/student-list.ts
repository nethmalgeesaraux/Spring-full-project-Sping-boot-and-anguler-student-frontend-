import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; //import CommonModule
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule], //add CommonModule here
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css'],
})
export class StudentList {
  students : Student[]=[
    { id: 1, firstName: 'John', lastName: 'Doe', age: 20 },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22 },
    { id: 3, firstName: 'Alice', lastName: 'Johnson', age: 19 },
  ];
}
