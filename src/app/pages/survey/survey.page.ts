import { Component, OnInit } from '@angular/core';
import { PatientVM } from 'src/app/models/PatientVM';
import { ApiService } from 'src/app/trialmate.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {
  megaPhoneElement: HTMLElement;
  patientdetails:PatientVM[]=[];
  loading:boolean= false;
  mobile:boolean;
  constructor(public alertController: AlertController,private modalService: NgbModal,public modalController: ModalController,private trailmateService:ApiService,private spinnerDialog: SpinnerDialog) {

   }
   async presentAlert(event,visitDesc,e) {
    const alert = await this.alertController.create({
      header: 'Survey Triggered',
      subHeader: visitDesc,
      message: 'Survey has been triggered for ' + e.PatientName,
      buttons: ['OK']
    });

    await alert.present();
    debugger
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this.megaPhoneElement= document.getElementById(value) as HTMLElement;
    this.megaPhoneElement.removeAttribute("name");
    this.megaPhoneElement.setAttribute("name", "calendar"); 
  }
  async scheduleVisit(event,visitDesc,e) {
    const alert = await this.alertController.create({
      header: 'Visit Scheduled',
      subHeader: visitDesc,
      message: 'Visit has been scheduled for ' + e.PatientName,
      buttons: ['OK']
    });

    await alert.present();
    debugger
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this.megaPhoneElement= document.getElementById('surveyscheduled' + e.PatientId + e.VisitId) as HTMLElement;
    this.megaPhoneElement.removeAttribute("name");
    this.megaPhoneElement.setAttribute("name", "megaphone"); 
  }
  
   async presentModal(e) {
    const modal = await this.modalController.create({
      component: ModalNotificationPage,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'items': '[1,2,3,4,5,6,7,8,9]',
        'visitDetail': e
      }
    });

    return await modal.present();

  }
 

   
 

  ngOnInit() {
    debugger;
    this.getPatients();
    this.loading= true;
    this.spinnerDialog.show();

    // if (window.screen.width === 360) { // 768px portrait
    //   this.mobile = true;
    // }
    window.onresize = () => this.mobile = window.innerWidth <= 991;
  }

  getPatients() {
    debugger;
    this.trailmateService.getAllPatients()
    .subscribe(result => {
      this.loading= false;
      this.spinnerDialog.hide();
      this.patientdetails = result
      console.log(JSON.stringify(result))
     
    });

    
    // this.trailmateService.getAllPatients()
    //   // clone the data object, using its known Config shape
    //   .subscribe((data: PatientVM[]) => this.patientdetails = { ...data });
    //   debugger;
    //   console.log(' Patient Details :' +  JSON.stringify(this.patientdetails))
  }
}
