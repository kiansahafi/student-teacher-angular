import { BaseModel } from './base.model';
import { Teacher } from './Teacher.model';

export interface Course extends BaseModel {
  Title: string;
  CourseNumber: number;
  Teacher: Teacher;
  CourseTime: string;
}
