import { Time } from "@angular/common";

export interface Data {
    user_id?:number;
    name:String;
    dob:Date;
    phoneNumber:number;
    healthIssue:String;
    selectDoctor:String;
    selectDate:Date;
    selectSlot:Time;
    selectCity:string;
    selectHospital:string;
    gender:string;
    age:number;
    status:string;
}
