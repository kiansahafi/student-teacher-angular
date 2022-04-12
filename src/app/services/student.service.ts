import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  public StudentInfo: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  public get getStudentInfo(): Observable<any[]> {
    return this.StudentInfo.asObservable();
  }

  public set setStudentInfo(studentInfo: any) {
    this.StudentInfo.next(studentInfo);
  }

  // public get headerOptions(): any {
  //   return {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer ' + localStorage.getItem('token'),
  //     }),
  //   };
  // }
  getStudentById(studentid: any) {
    return this.http.get(
      'https://tavana-node.herokuapp.com/Student/' + '{' + studentid + '}'
      // this.headerOptions
    );
  }

  deleteStudentById(studentid: string) {
    return this.http.delete(
      'https://tavana-node.herokuapp.com/Student/' + '{' + studentid + '}'
      // this.headerOptions
    );
  }

  AddStudent(studentInfo?: any) {
    return this.http.post(
      'https://tavana-node.herokuapp.com/Student',
      studentInfo
      // this.headerOptions
    );
  }

  editStudent(studentInfo: any) {
    return this.http.put(
      'https://tavana-node.herokuapp.com/auth/Student',
      studentInfo
      // this.headerOptions
    );
  }
  getStudent(studentInfo?: any) {
    return this.http.get(
      'https://tavana-node.herokuapp.com/Student',
      studentInfo
      // this.headerOptions
    );
  }
}
