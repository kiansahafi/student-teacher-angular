import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
})
export class CourseEditComponent implements OnInit {
  private isOnEditMode: boolean = false;
  private courseId: string = '';
  email = new FormControl('');
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  courseForm = this.formbuilder.group({
    Title: '',
    CourseNumber: '',
    Teacher: '',
    CourseTime: '',
  });
  constructor(
    private formbuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(this.onRouteChange.bind(this));
  }

  onRouteChange(res: any) {
    if (res[1].path == 'edit') {
      this.isOnEditMode = true;
      this.courseId = res[2].path;
      this.getData();
    } else if (res[1].path == 'Insert') {
      this.isOnEditMode == false;
    }
  }
  getData() {}

  onSubmit() {
    if (this.isOnEditMode) {
      this.editData();
    } else {
      this.insertData();
    }
  }
  editData() {}
  insertData() {}
}
