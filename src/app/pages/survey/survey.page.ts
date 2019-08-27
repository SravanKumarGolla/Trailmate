import { Component, OnInit } from '@angular/core';
import { PatientVM } from 'src/app/models/PatientVM';
import { ApiService } from 'src/app/trialmate.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Router } from '@angular/router';
import { LabVM } from 'src/app/models/LabVM';
import { ModalVisitPage } from '../modal/modal.visit';
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
  labdetails:LabVM[]=[]; 
  constructor(private router: Router,public alertController: AlertController,private modalService: NgbModal,public modalController: ModalController,private trailmateService:ApiService,private spinnerDialog: SpinnerDialog) {

   }

   logOut(){ 
    if (localStorage.getItem('currentUser')) { 
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
    } 
  }

   async presentAlert(event,visitDesc,e) {
    const alert = await this.alertController.create({
      header: 'Survey Triggered',
      subHeader: visitDesc,
      message: 'Survey has been triggered for ' + e.PatientName,
      buttons: ['OK']
    });

    await alert.present();

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

    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this.megaPhoneElement= document.getElementById('surveyscheduled' + e.PatientId + e.VisitId) as HTMLElement;
    this.megaPhoneElement.removeAttribute("name");
    this.megaPhoneElement.setAttribute("name", "megaphone"); 
  }
  
  

   
 

  ngOnInit() {
    
    this.getPatients();
    this.loading= true;
    this.spinnerDialog.show();

    // if (window.screen.width === 360) { // 768px portrait
    //   this.mobile = true;
    // }
    window.onresize = () => this.mobile = window.innerWidth <= 991;
  }

  getPatients() {
    
    this.trailmateService.getAllPatients()
    .subscribe(result => {
      this.loading= false;
      this.spinnerDialog.hide();
      this.patientdetails = result
      console.log(JSON.stringify(result))
      this.labdetails=[{"Id":1,"VisitId":1,"BPLabVal":110,"HemoLabVal":"14.5","Glucose":130,"HealthTip":true},{"Id":1,"VisitId":2,"BPLabVal":120,"HemoLabVal":"15.5","Glucose":140,"HealthTip":false},
      {"Id":1,"VisitId":3,"BPLabVal":120,"HemoLabVal":"17","Glucose":122,"HealthTip":false},{"Id":1,"VisitId":4,"BPLabVal":120,"HemoLabVal":"14.5","Glucose":130,"HealthTip":true},
      {"Id":1,"VisitId":5,"BPLabVal":110,"HemoLabVal":"16.5","Glucose":110,"HealthTip":true},{"Id":1,"VisitId":6,"BPLabVal":120,"HemoLabVal":"16.2","Glucose":140,"HealthTip":false},
      {"Id":2,"VisitId":1,"BPLabVal":110,"HemoLabVal":"16.5","Glucose":130,"HealthTip":true},{"Id":2,"VisitId":4,"BPLabVal":120,"HemoLabVal":"14.5","Glucose":160,"HealthTip":true}]; 
    });

    
    // this.trailmateService.getAllPatients()
    //   // clone the data object, using its known Config shape
    //   .subscribe((data: PatientVM[]) => this.patientdetails = { ...data });
    //   debugger;
    //   console.log(' Patient Details :' +  JSON.stringify(this.patientdetails))
  }

  async openVisitPopup(e) { 
    var labdata=this.getLabDetails(e.Id,e.VisitId); 
    const modal = await this.modalController.create({
    component: ModalVisitPage,
    componentProps: {
    'VisitId': e.VisitId,
    'VisitDescription': e.VisitDescription,
    'VisitStatus':e.VisitStatus,
    'BPLabValue' :labdata.BPLabVal,
    'HemoLabValue':labdata.HemoLabVal,
    'Glucose':labdata.Glucose,
    'HealthTip':labdata.HealthTip,
    }
    });
    return await modal.present();
    }
    getLabDetails(pid,visitid){
    for(let lab of this.labdetails){
    if(lab.Id==pid && lab.VisitId==visitid){
    return lab;
    }
    }
    } 
}
