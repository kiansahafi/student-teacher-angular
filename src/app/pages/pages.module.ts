import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRouterOutletComponent } from './components/pages-router-outlet/pages-router-outlet.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { TeacherPageComponent } from './components/teacher-page/teacher-page.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseEditComponent } from './components/course-page/course-edit/course-edit.component';
import { StudentEditComponent } from './components/student-page/student-edit/student-edit.component';
import { TeacherEditComponent } from './components/teacher-page/teacher-edit/teacher-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {
    path: '',
    component: PagesRouterOutletComponent,
    children: [{ path: '', component: StudentPageComponent }],
  },
];

@NgModule({
  declarations: [
    PagesRouterOutletComponent,
    StudentPageComponent,
    TeacherPageComponent,
    CoursePageComponent,
    CourseEditComponent,
    StudentEditComponent,
    TeacherEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
})
export class PagesModule {}
