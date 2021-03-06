import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  public CourseInfo: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private serverUrl: string = environment.serverAddress;
  constructor(private http: HttpClient) {}

  public get getCourseInfo(): Observable<any[]> {
    return this.CourseInfo.asObservable();
  }

  public set setCourseInfo(courseInfo: any) {
    this.CourseInfo.next(courseInfo);
  }

  // public get headerOptions(): any {
  //   return {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer ' + localStorage.getItem('token'),
  //     }),
  //   };
  // }

  getCourseById(courseid: any) {
    return this.http.get(
      this.serverUrl + courseid
      // this.headerOptions
    );
  }

  deleteCourseById(courseid: string) {
    return this.http.delete(
      this.serverUrl + courseid
      // this.headerOptions
    );
  }

  AddCourse(courseInfo?: any) {
    return this.http.post(
      this.serverUrl,
      courseInfo
      // this.headerOptions
    );
  }

  editCourse(courseInfo: any) {
    return this.http.put(
      this.serverUrl,
      courseInfo
      // this.headerOptions
    );
  }
  getCourse(courseInfo?: any) {
    return this.http.get(
      this.serverUrl,
      courseInfo
      // this.headerOptions
    );
  }
}
