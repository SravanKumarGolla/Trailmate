

import { Component, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
    selector: 'modal-page',
    template: `
   
    <ion-card full-screen>
  <ion-card-header>  
    <ion-card-title style="text-align:center;color:#4c8dff">Visit Details</ion-card-title>
  </ion-card-header>

  <ion-card-content >
  <ion-grid>
<ion-row>
  <ion-col>
    <div>
    Visit Id : 
    </div>
  </ion-col>
  <ion-col>
    <div>
    {{VisitId}}
    </div>
  </ion-col> 
</ion-row>
<ion-row>
  <ion-col>
    <div>
    Visit Description : 
    </div>
  </ion-col>
  <ion-col>
    <div>
    {{VisitDescription}}
    </div>
  </ion-col> 
</ion-row>
<ion-row>
  <ion-col>
    <div>
    Visit Status : 
    </div>
  </ion-col>
  <ion-col>
    <div>
    {{VisitStatus}}
    </div>
  </ion-col> 
</ion-row>
<ion-row>
  <ion-col>
    <div>
    BP Normal Range : 
    </div>
  </ion-col>
  <ion-col>
    <div>
    120
    </div>
  </ion-col> 
</ion-row>
<ion-row>
  <ion-col>
    <div>
    BP Lab Test Value : 
    </div>
  </ion-col>
  <ion-col>
    <div>
    {{BPLabValue}}
    </div>
  </ion-col> 
</ion-row>
<ion-row>
  <ion-col>
    <div>
    Hemoglobin Normal Range : 
    </div>
  </ion-col>
  <ion-col>
    <div>
    13.5 to 17.5 grams
    </div>
  </ion-col> 
</ion-row>
<ion-row>
  <ion-col>
    <div>
    Hemoglobin Lab Test Value : 
    </div>
  </ion-col>
  <ion-col>
    <div>
    {{HemoLabValue}} grams
    </div>
  </ion-col> 
</ion-row>
<ion-row>
  <ion-col>
    <div>
    Average Blood Glucose :
    </div>
  </ion-col>
  <ion-col>
    <div>
    121 - 150 mg/dl
    </div>
  </ion-col> 
</ion-row>
<ion-row>
  <ion-col>
    <div>
    Average Blood Glucose Lab Test Value :
    </div>
  </ion-col>
  <ion-col>
    <div>
    {{Glucose}} mg/dl
    </div>
  </ion-col> 
</ion-row>
</ion-grid>
 
  </ion-card-content>
  <ion-button  [disabled]="!HealthTip"   expand="block" (click)="sendhealthtip('close')"> Send Health Notification </ion-button>
  <ion-button  expand="block" (click)="dismisspopup('close')"> Close </ion-button>
 
</ion-card>
  `,
  styles:[
      `
        .custom-size{
            width="300px!important"
        },
        .ion-modal{
            height: "20%"
        }
      `
  ]
})
export class ModalVisitPage {

    VisitId:number;
    VisitDescrption: string;
    VisitStatus:string;
    BPLabValue:number;
    HemoLabValue:number;
    Glucose:number;
    HealthTip:boolean;
    constructor(public navParams: NavParams, private modalCtrl: ModalController) {       
        this.VisitId =  this.VisitId;
        this.VisitDescrption=this.VisitDescrption;
        this.VisitStatus=this.VisitStatus;
        this.BPLabValue=this.BPLabValue;
        this.HemoLabValue=this.HemoLabValue;
        this.Glucose=this.Glucose;
        this.HealthTip = this.HealthTip;
    }
    itemClick(item) {
        alert(item)
    }
    sendhealthtip(data){
      this.modalCtrl.dismiss({
        'dismissed': true,
        'data':data,
        'visitdetail': this.navParams.get('visitDetail')
    });
    }

    dismisspopup(data) {

        console.log('modal pop up close' + JSON.stringify( this.navParams.get('visitDetail')))
        console.log(data)
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        if(data==='close')
        {
          this.modalCtrl.dismiss({
            'dismissed': true,
            'data':data,
            'visitdetail': null
        });
        }
        else{
          this.modalCtrl.dismiss({
            'dismissed': true,
            'data':data,
            'visitdetail': this.navParams.get('visitDetail')
        });
        }
        
    }
}

