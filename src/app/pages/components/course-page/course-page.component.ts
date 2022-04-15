import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { COURSE_MOCK_DATA } from 'src/app/mock/course.mock';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
})
export class CoursePageComponent implements OnInit {
  public Courses: Course[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.Courses = COURSE_MOCK_DATA;
    //in here we will call the services for getting the info and putting them in the Courses array
  }

  OnEdit(id: string) {
    //in here you should take the id of the item and navigate to the edit page
    this.router.navigate(['Courses-Page/' + id]);
  }

  AddNewItem() {
    this.router.navigate(['Courses-Page/Insert']);
  }
}
