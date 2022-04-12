import { BaseModel } from './base.model';
import { Course } from './course.model';

export interface Student extends BaseModel {
  firstName: string;
  lastName: string;
  aquiredClasses: Course[];
  emailAddress: string;
  phoneNumber: string;
}
