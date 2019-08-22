export class VisitCalendarDates {
   dayName:string;
   dayNumber:number;
   isVisitDay:boolean;
   monthName:string;
}
export class AllDateCollection
{
    visitDate:string;
    isVisitDay : boolean;
}

export class ReminderDatesByMonth
{
    monthName:string;
    dayDetails:VisitCalendarDates;
}

export class VisitDetails
{
    id:number;
    StartDate:Date;
    EndDate:Date;

}