import { Component, OnInit, Input,AfterViewInit } from '@angular/core';
import { VisitCalendarDates, VisitDetails, AllDateCollection } from 'src/app/models/reminders';
import { DatePipe } from '@angular/common'
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { retry } from 'rxjs/operators';



@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  providers: [DatePipe]
})
export class PatientNotificationPage implements OnInit,AfterViewInit  {
  cardElement: HTMLElement;
  patientCalendar = [];
  filteredVisits = [];
  modalClosedData=[];
  localstoragearray=[];
  visitsCollection: VisitDetails[] = [];
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  reminderDates: Date[] = [];
  calendarDates: AllDateCollection[] = [];
  envision(eventData){
     if(eventData.isVisitDay){
       return "success"
     }
     else{
      return "dark"
     }
  }
  ngAfterViewInit() {
    debugger
    var visitDet:any=[];
    if(localStorage.getItem('reminderDetail')){
      visitDet = JSON.parse(localStorage.getItem('reminderDetail'));
    }
    console.log('reminderDetail : ' + JSON.stringify(visitDet))
    debugger
      if(visitDet){
        for (let visitdt of visitDet) {
          if(visitdt.visitdetail){
            for (let dt of this.filteredVisits) {
              if(visitdt.visitdetail.dayName === dt.dayName && visitdt.visitdetail.dayNumber === dt.dayNumber && visitdt.visitdetail.monthName == dt.monthName)
              {
                  dt.reminderset = true;
                  dt.reminderval= visitdt.data;
                  debugger
                  this.cardElement= document.getElementById(visitdt.visitdetail.dayNumber.toString() + visitdt.visitdetail.monthName.toString() + visitdt.visitdetail.dayName.toString()) as HTMLElement;
                  if(this.cardElement) {
                    this.cardElement.removeAttribute("color");
                    this.cardElement.setAttribute("color", "primary"); 
  
                  }
                 
                  break;
              }
            }
          }
         
        }
      }
      
  }
  openpopup(){
    // const modalRef = this.modalService.open(NgbdModalContent);

    // modalRef.componentInstance.name = 'World';
  }

  async presentModal(e) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'items': '[1,2,3,4,5,6,7,8,9]',
        'visitDetail': e
      }
    });

    modal.onDidDismiss()
    .then((data) => {
      this.modalClosedData = data['data']; // Here's your selected user!
      debugger
      this.cardElement= document.getElementById(data['data'].visitdetail.dayNumber.toString()+data['data'].visitdetail.monthName.toString()+data['data'].visitdetail.dayName.toString()) as HTMLElement;
      this.cardElement.removeAttribute("color");
      this.cardElement.setAttribute("color", "primary"); 
       if(data['data'].visitdetail){
        this.localstoragearray.push(data['data']);
       
       }
       localStorage.setItem('reminderDetail', JSON.stringify(this.localstoragearray));
      var details= data['data'].visitdetail;

      for (let dt of this.filteredVisits) {
        if(details.dayName === dt.dayName && details.dayNumber === dt.dayNumber && details.monthName == dt.monthName)
        {
            dt.reminderset = true;
            dt.reminderval= data['data'].data;
            break;
        }
      }

      console.log(' modal closed data ' + JSON.stringify(data))
  });

    return await modal.present();
  }


  constructor(public datepipe: DatePipe,private modalService: NgbModal,public modalController: ModalController) {
    
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
        visitCalDate.reminderset=false;
        visitCalDate.reminderval='';
        return visitCalDate;
      })();

      this.patientCalendar.push({
        key: entry.monthName,
        value: entry
      })
    }
    for (let key in this.patientCalendar) {
      
      let value = this.patientCalendar[key];
      if (value.key == "August") {
        this.filteredVisits.push(value.value)
      }
    }
    
    var visitDet:any=[];
    if(localStorage.getItem('reminderDetail')){
      visitDet = JSON.parse(localStorage.getItem('reminderDetail'));
    }
    console.log('reminderDetail : ' + JSON.stringify(visitDet))
    debugger
      if(visitDet){
        for (let visitdt of visitDet) {
          if(visitdt.visitdetail){
            for (let dt of this.filteredVisits) {
              if(visitdt.visitdetail.dayName === dt.dayName && visitdt.visitdetail.dayNumber === dt.dayNumber && visitdt.visitdetail.monthName == dt.monthName)
              {
                  dt.reminderset = true;
                  dt.reminderval= visitdt.data;
                  debugger
                  this.cardElement= document.getElementById(visitdt.visitdetail.dayNumber.toString() + visitdt.visitdetail.monthName.toString() + visitdt.visitdetail.dayName.toString()) as HTMLElement;
                  if(this.cardElement) {
                    this.cardElement.removeAttribute("color");
                    this.cardElement.setAttribute("color", "primary"); 
  
                  }
                 
                  break;
              }
            }
          }
         
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
