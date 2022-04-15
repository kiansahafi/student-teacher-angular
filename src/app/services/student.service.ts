import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  public StudentInfo: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private serverUrl = environment.serverAddress;
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
      this.serverUrl + studentid
      // this.headerOptions
    );
  }

  deleteStudentById(studentid: string) {
    return this.http.delete(
      this.serverUrl + studentid
      // this.headerOptions
    );
  }

  AddStudent(studentInfo?: any) {
    return this.http.post(
      this.serverUrl,
      studentInfo
      // this.headerOptions
    );
  }

  editStudent(studentInfo: any) {
    return this.http.put(
      this.serverUrl,
      studentInfo
      // this.headerOptions
    );
  }
  getStudent(studentInfo?: any) {
    return this.http.get(
      this.serverUrl,
      studentInfo
      // this.headerOptions
    );
  }
}
