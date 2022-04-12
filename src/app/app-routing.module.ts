import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './pages/components/course-page/course-page.component';
import { StudentPageComponent } from './pages/components/student-page/student-page.component';
import { TeacherPageComponent } from './pages/components/teacher-page/teacher-page.component';

const routes: Routes = [
  {
    path: 'Pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  { path: 'Students-Page', component: StudentPageComponent },
  { path: 'Teachers-Page', component: TeacherPageComponent },
  { path: 'Courses-Page', component: CoursePageComponent },
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
