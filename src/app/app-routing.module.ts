import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseEditComponent } from './pages/components/course-page/course-edit/course-edit.component';
import { CoursePageComponent } from './pages/components/course-page/course-page.component';
import { StudentEditComponent } from './pages/components/student-page/student-edit/student-edit.component';
import { StudentPageComponent } from './pages/components/student-page/student-page.component';
import { TeacherEditComponent } from './pages/components/teacher-page/teacher-edit/teacher-edit.component';
import { TeacherPageComponent } from './pages/components/teacher-page/teacher-page.component';

const routes: Routes = [
  {
    path: 'Pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  { path: 'Students-Page', component: StudentPageComponent },
  { path: 'Students-Page/:Id', component: StudentEditComponent },
  { path: 'Students-Page/Insert', component: StudentEditComponent },
  { path: 'Teachers-Page', component: TeacherPageComponent },
  { path: 'Teacher-Page/:Id', component: TeacherEditComponent },
  { path: 'Teacher-Page/Insert', component: TeacherEditComponent },
  { path: 'Courses-Page', component: CoursePageComponent },
  { path: 'Courses-Page/:Id', component: CourseEditComponent },
  { path: 'Courses-Page/Insert', component: CourseEditComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
