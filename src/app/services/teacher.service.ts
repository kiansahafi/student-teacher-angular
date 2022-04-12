import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  public TeacherInfo: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {}

  public get getTeacherInfo(): Observable<any[]> {
    return this.TeacherInfo.asObservable();
  }

  public set setTeacherInfo(teacherInfo: any) {
    this.TeacherInfo.next(teacherInfo);
  }
  // public get headerOptions(): any {
  //   return {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer ' + localStorage.getItem('token'),
  //     }),
  //   };
  // }
  getTeacherById(teacherid: any) {
    return this.http.get(
      'https://tavana-node.herokuapp.com/Teacher/' + '{' + teacherid + '}'
      // this.headerOptions
    );
  }

  deleteTeacherById(teacherid: string) {
    return this.http.delete(
      'https://tavana-node.herokuapp.com/Teacher/' + '{' + teacherid + '}'
      // this.headerOptions
    );
  }

  AddTeacher(teacherInfo?: any) {
    return this.http.post(
      'https://tavana-node.herokuapp.com/Teacher',
      teacherInfo
      // this.headerOptions
    );
  }

  editTeacher(teacherInfo: any) {
    return this.http.put(
      'https://tavana-node.herokuapp.com/auth/Teacher',
      teacherInfo
      // this.headerOptions
    );
  }
  getTeacher(teacherInfo?: any) {
    return this.http.get(
      'https://tavana-node.herokuapp.com/Teacher',
      teacherInfo
      // this.headerOptions
    );
  }
}
