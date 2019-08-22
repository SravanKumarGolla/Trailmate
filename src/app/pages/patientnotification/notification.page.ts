import { Component, OnInit } from '@angular/core';
import { VisitCalendarDates, VisitDetails, AllDateCollection } from 'src/app/models/reminders';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  providers: [DatePipe]
})
export class PatientNotificationPage implements OnInit {
  patientCalendar = [];
  filteredVisits = [];
  visitsCollection: VisitDetails[] = [];
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  reminderDates: Date[] = [];
  calendarDates: AllDateCollection[] = [];

  constructor(public datepipe: DatePipe) {
    debugger
    var point = (function () {
      var point = new VisitDetails();
      point.id = 1;
      point.StartDate = new Date('08/09/2019');
      point.EndDate = new Date('08/09/2019');
      return point;
    })();

    this.visitsCollection.push(point);
    let dateObj = {} as AllDateCollection;

    dateObj.visitDate = this.datepipe.transform(point.StartDate.toString(), 'MM/dd/yyyy');
    dateObj.isVisitDay = true;
    //this.calendarDates.push(dateObj)
    dateObj = null;

    point = null;
    point = (function () {
      var point = new VisitDetails();
      point.id = 2;
      point.StartDate = new Date('08/22/2019');
      point.EndDate = new Date('08/22/2019');
      return point;
    })();
    this.visitsCollection.push(point);

    dateObj = {} as AllDateCollection;

    dateObj.visitDate = this.datepipe.transform(point.StartDate.toString(), 'MM/dd/yyyy');
    dateObj.isVisitDay = true;
    //this.calendarDates.push(dateObj)
    dateObj = null;
    point = null;
    point = (function () {
      var point = new VisitDetails();
      point.id = 3;
      point.StartDate = new Date('09/09/2019');
      point.EndDate = new Date('09/09/2019');
      return point;
    })();
    this.visitsCollection.push(point);
    dateObj = {} as AllDateCollection;

    dateObj.visitDate = this.datepipe.transform(point.StartDate.toString(), 'MM/dd/yyyy');
    dateObj.isVisitDay = true;
    //this.calendarDates.push(dateObj)
    dateObj = null;
    point = null;
    point = (function () {
      var point = new VisitDetails();
      point.id = 4;
      point.StartDate = new Date('09/21/2019');
      point.EndDate = new Date('09/21/2019');
      return point;
    })();
    this.visitsCollection.push(point);
    dateObj = {} as AllDateCollection;

    dateObj.visitDate = this.datepipe.transform(point.StartDate.toString(), 'MM/dd/yyyy');
    dateObj.isVisitDay = true;
    //this.calendarDates.push(dateObj)
    dateObj = null;
  }

  ngOnInit() {
    let dates: Date[] = [];

    this.visitsCollection.forEach(function (value) {
      dates.push(value.StartDate)
    });
    for (let dt of dates) {
      this.populateReminderDates(dt)
      let dateObj = {} as AllDateCollection;
      dateObj.visitDate = this.datepipe.transform(dt.toString(), 'MM/dd/yyyy');
      dateObj.isVisitDay = true;
      this.calendarDates.push(dateObj)
    }

    for (let dt of this.calendarDates) {

      let dayName = this.getDayName(dt.visitDate, null);
      let monthName = this.getMonthName(dt.visitDate);
      let dayNumber = Number(dt.visitDate.toString().split('/')[1])
      var entry = (function () {
        var visitCalDate = new VisitCalendarDates();
        visitCalDate.dayName = dayName
        visitCalDate.dayNumber = dayNumber
        visitCalDate.monthName = monthName
        visitCalDate.isVisitDay = dt.isVisitDay
        return visitCalDate;
      })();

      this.patientCalendar.push({
        key: entry.monthName,
        value: entry
      })
    }
    for (let key in this.patientCalendar) {
      debugger
      let value = this.patientCalendar[key];
      if (value.key == "August") {
        this.filteredVisits.push(value.value)
      }
    }
   console.log(JSON.stringify(this.filteredVisits))
  }
  getDayName(dateStr, locale) {
    var date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: 'long' });
  }
  getMonthName(dateStr): string {
    return this.monthNames[Number(dateStr.toString().split('/')[0]) - 1]
  }
  private populateReminderDates(dateStr: Date): Date[] {

    var dayNums: Date[] = [];
    var datestr = dateStr.toString();
    var dt = this.datepipe.transform(datestr, 'MM/dd/yyyy');
    var visitDayNumber = dt.split("/")[1]
    var i = 5;
    var dayIncrement = 5;
    while (i > 0) {
      var nums = Number(visitDayNumber);

      nums = nums - dayIncrement;

      var d = new Date(Number(dt.toString().split("/")[2]), Number(dt.toString().split("/")[0]) - 1, nums);
      dayNums.push(new Date(this.datepipe.transform(d.toString(), 'MM/dd/yyyy')))

      let dateObj = {} as AllDateCollection;
      dateObj.visitDate = this.datepipe.transform(d.toString(), 'MM/dd/yyyy');
      dateObj.isVisitDay = false;

      this.calendarDates.push(dateObj)
      --i;
      //dayIncrement++;
      --dayIncrement;
    }
    return dayNums;
  }
  details(e:any){
    console.log('details test : ' +  JSON.stringify(e))
  }
}
