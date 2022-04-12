import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRouterOutletComponent } from './components/pages-router-outlet/pages-router-outlet.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { TeacherPageComponent } from './components/teacher-page/teacher-page.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
