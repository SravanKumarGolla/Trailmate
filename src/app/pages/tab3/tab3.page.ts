import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/trialmate.service';
import { Dashboarddata } from 'src/app/models/Dashboard';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  trialmateDashboardContent:Dashboarddata[]=[];

  constructor(private router: Router,public alertController: AlertController, public trailmateService:ApiService) {

  }

  ngOnInit() {
    // this.trialmateDashboardContent = this.trailmateService.getTrialmateDashboard();
    // console.log('this.questions :' + JSON.stringify(this.trialmateDashboardContent))
     
    
    this.trailmateService.getTrialmateDashboard()
    .subscribe(result => {
      this.trialmateDashboardContent = result
      console.log(' trialmateDashboardContent ' + JSON.stringify(result))
    
    });

  }

}