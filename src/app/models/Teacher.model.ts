import { BaseModel } from './base.model';

export interface Teacher extends BaseModel {
  firstName: string;
  lastName: string;
  teacherNumber: string;
  phoneNumber: string;
  emailAddress: string;
}
