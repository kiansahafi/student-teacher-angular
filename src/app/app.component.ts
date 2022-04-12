import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './core/alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'student-teacher-crud';
  constructor(
    private router: Router,
    // private productservice: ProductService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.alert.showSnackbar(
      "Wellcome, Hope You're having a good time! 😁",
      'INFO',
      3000
    );
    // this.productservice.getgoods().subscribe((data: any) => {
    //   this.products = data;
    //   console.log(this.products);
    // });
  }

  Menu(event: any) {
    let list = document.querySelector('ul');
    if (list != null) {
      event.name === 'menu'
        ? ((event.name = 'close'),
          list.classList.add('top-[80px]'),
          list.classList.add('opacity-100'))
        : ((event.name = 'menu'),
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
