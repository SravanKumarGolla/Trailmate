

import { Component, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
    selector: 'modal-page',
    template: `
   
    <ion-card full-screen>
  <ion-card-header>
  
    <ion-card-title>Set Reminder</ion-card-title>
  </ion-card-header>

  <ion-card-content >

  <ion-button  expand="block" (click)="dismisspopup('close')"> Close </ion-button>
  <section class="full-width" >
  <ion-button expand="block" (click)="dismisspopup('1 AM')"  color="medium"> 1 AM</ion-button>
   </section>
   <section class="full-width" >
   <ion-button expand="block" (click)="dismisspopup('2 AM')" color="medium"> 2 AM</ion-button>
    </section>
    <section class="full-width" >
    <ion-button expand="block" (click)="dismisspopup('3 AM')"   color="medium"> 3 AM</ion-button>
     </section>
     <section class="full-width" >
     <ion-button expand="block" (click)="dismisspopup('4 AM')" color="medium"> 4  AM </ion-button>
      </section>


      <section class="full-width" >
      <ion-button expand="block" (click)="dismisspopup('5 AM')" color="medium"> 5  AM </ion-button>
       </section>
       <section class="full-width" >
       <ion-button expand="block" (click)="dismisspopup('6 AM')"  color="medium">6  AM </ion-button>
        </section>
        <section class="full-width" >
        <ion-button expand="block" (click)="dismisspopup('7 AM')" color="medium"> 7  AM </ion-button>
         </section
         ><section class="full-width" >
         <ion-button expand="block" (click)="dismisspopup('8 AM')" color="medium"> 8  AM </ion-button>
          </section>
          <section class="full-width" >
          <ion-button expand="block" (click)="dismisspopup('9 AM')"  color="medium"> 9  AM </ion-button>
           </section>
     
            
  </ion-card-content>
</ion-card>

 
  
  `,
  styles:[
      `
        .custom-size{
            width="300px!important"
        }
      `
  ]
})
export class ModalPage {

    @Input() firstName: string;
    @Input() lastName: string;
    @Input() items: number[] = [];
    @Input() visitDetail:[]
    constructor(public navParams: NavParams, private modalCtrl: ModalController) {
        // componentProps can also be accessed at construction time using NavParams
        
        console.log(navParams.get('firstName'));
    }
    itemClick(item) {
        alert(item)
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

