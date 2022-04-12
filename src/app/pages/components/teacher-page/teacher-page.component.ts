import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TEACHER_MOCK_DATA } from 'src/app/mock/teacher.mock';
import { Teacher } from 'src/app/models/Teacher.model';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
})
export class TeacherPageComponent implements OnInit {
  public Teachers: Teacher[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.Teachers = TEACHER_MOCK_DATA;
  }

  onEdit(id: string) {
    this.router.navigate(['Teacher-Page/' + id]);
  }
}
