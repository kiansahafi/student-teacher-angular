import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { STUDENT_MOCK_DATA } from 'src/app/mock/student.mock';
import { Student } from 'src/app/models/Student.model';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
})
export class StudentPageComponent implements OnInit {
  public Students: Student[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    //in here we will call the services for getting the info and putting them in the Courses array
    this.Students = STUDENT_MOCK_DATA;
  }

  onEdit(id: string) {
    this.router.navigate(['Students-Page/' + id]);
  }
}
