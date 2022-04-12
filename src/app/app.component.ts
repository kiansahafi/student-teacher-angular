import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './core/alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'student-teacher-crud';
  constructor(
    private router: Router,
    // private productservice: ProductService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.alert.showSnackbar('Wellcome To My Website!😁', 'SUCCESS', 3000);
    // this.productservice.getgoods().subscribe((data: any) => {
    //   this.products = data;
    //   console.log(this.products);
    // });
  }

  Menu(e: any) {
    let list = document.querySelector('ul');
    if (list != null) {
      e.name === 'menu'
        ? ((e.name = 'close'),
          list.classList.add('top-[80px]'),
          list.classList.add('opacity-100'))
        : ((e.name = 'menu'),
          list.classList.remove('top-[80px]'),
          list.classList.remove('opacity-100'));
    }
  }

  GoToHomePage() {
    this.router.navigate(['']);
  }

  SendToStudentPage() {
    this.router.navigate(['Students-Page']);
  }

  SendToTeachersPage() {
    this.router.navigate(['Teachers-Page']);
  }

  SendToCoursesPage() {
    this.router.navigate(['Courses-Page']);
  }
}
