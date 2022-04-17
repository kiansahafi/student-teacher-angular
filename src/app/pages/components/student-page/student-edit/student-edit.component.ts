import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
})
export class StudentEditComponent implements OnInit {
  private isOnEditMode: boolean = false;
  private studentId: string = '';
  courses: any[] = [];
  email = new FormControl('');
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  studentForm = this.formbuilder.group({
    FirstName: '',
    LastName: '',
    EmailAddress: ['', Validators.email],
    course: '',
    PhoneNumber: '',
  });

  constructor(
    private formbuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(this.onRouteChange.bind(this));
    //should call the backend and fill the courses[] array with data
  }

  onRouteChange(res: any) {
    if (res[1].path == 'edit') {
      this.isOnEditMode = true;
      this.studentId = res[2].path;
      this.getData();
    } else if (res[1].path == 'Insert') {
      this.isOnEditMode = false;
    }
  }

  getData() {
    //get the data from backend and fill the forms for edit
  }
  onSubmit() {
    if (this.isOnEditMode == true) {
      this.editData();
    } else {
      this.insertData();
    }
  }

  editData() {
    //calling the backend to edit the data
  }

  insertData() {
    //calling the backend to insert the new data
  }
}
