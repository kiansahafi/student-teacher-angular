import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
})
export class TeacherEditComponent implements OnInit {
  private isOnEditMode: boolean = false;
  private teacherId: string = '';
  email = new FormControl('');
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  teacherForm = this.formBuilder.group({
    FirstName: '',
    LastName: '',
    EmailAddress: ['', Validators.email],
    teacherNumber: '',
    PhoneNumber: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(this.onRouteChange.bind(this));
  }

  onRouteChange(res: any) {
    if (res[1].path == 'edit') {
      this.isOnEditMode = true;
      this.teacherId = res[2].path;
      this.getData();
    } else if (res[1].path == 'Insert') {
      this.isOnEditMode = false;
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
  insertData() {}
  editData() {}
}
