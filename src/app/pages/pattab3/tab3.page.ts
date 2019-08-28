import { Component } from '@angular/core';
import { EngagementContentVM } from 'src/app/models/EngagementContent';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/trialmate.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'patienttab3.page.html',
  styleUrls: ['patienttab3.page.scss']
})
export class PatientTab3Page {

  
  engagementContent:EngagementContentVM[]=[];
  loading= false;
  alertButton: HTMLElement;
  ngOnInit() {
 
     this.getEngagementContent();
     this.loading= true;
     // window.onresize = () => this.mobile = window.innerWidth <= 991;
   }
 constructor(public alertController: AlertController,private trailmateService:ApiService) {

 }

 
async presentAlert(event,visitDesc,e) {
 const alert = await this.alertController.create({
   header: 'Health Alert',
   subHeader: visitDesc,
   message: e.PatientName +' has been alerted on ' + e.AlertType ,
   buttons: ['OK']
 });

 await alert.present();

 var target = event.target || event.srcElement || event.currentTarget;
 var idAttr = target.attributes.id;
 var value = idAttr.nodeValue;
 this.alertButton= document.getElementById(value) as HTMLElement;
 
 this.alertButton.setAttribute("disabled", "disabled"); 
}


 getEngagementContent() {
 
     this.trailmateService.getEngagementContent(0,0)
     .subscribe(result => {
       this.loading= false;
       this.engagementContent = result
       console.log(JSON.stringify(result))
       
     });
   }
}