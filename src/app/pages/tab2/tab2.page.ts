
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/trialmate.service';
import { Dashboarddata } from 'src/app/models/Dashboard';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  dashboarddetails:Dashboarddata[]=[];
  user:any;
  role:string;
  mobile:boolean;  
  HappyData=[];
  UnHappyData=[];
  Neutral=[];
  finalData=[];
   sepHappy:number = 0
   sepUnHappy:number = 0
   sepNeutral:number = 0
   counter:number= 0;
constructor(private router: Router,private trailmateService:ApiService) {} 

  ngOnInit() {
   
    console.log('ngOnInit')
    this.user= JSON.parse(localStorage.getItem('currentUser'));
    if(this.user.username == "admin"){
     this.role ="admin";
    }
    else{
     this.role ="patient";
    }
    window.onresize = () => this.mobile = window.innerWidth <= 991;
    console.log('user : ', JSON.parse(localStorage.getItem('currentUser')));
    this.getchartdata();
   }
   logOut(){ 
   
    //  alert(localStorage.getItem('currentUser'))
    // if (localStorage.getItem('currentUser')) { 
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login'],{replaceUrl: true });
   // } 
   
}
public lineChartData:Array<any> = [
  // {data: [50, 39, 45, 30, 48, 51, 40], label: 'Unhappy patients'}  ,
  // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Happy patients'},
  // {data: [18, 48, 77, 9, 100, 27, 40], label: 'Neutral patients'}
  
  
  
  {data: [0,0,0], label: 'Unhappy patients'},
  {data: [0,0,0], label: 'Happy patients'} ,
  {data: [0,0,0], label: 'Neutral patients'}

];
getchartdata(){
  var Dashdata:any=[];
  debugger;
  Dashdata=this.getDashBoardData();
  // Form HappyData from DB
console.log(Dashdata)

// sepHappy:number = 0
// sepUnHappy:number = 0
// sepNeutral:number = 0
var counter = 0;

for(var j of Dashdata){
  if(j.MonthNameDesc=="August"){
    this.HappyData.push(Number(j.happycountAug));    
    this.UnHappyData.push(Number(j.unhappycountAug));
    this.Neutral.push(Number(j.neutralcountAug));
  }
  if(j.MonthNameDesc=="September" && counter == 0){
    counter = counter + 1
    // this.sepHappy = Number(j.happycountSep) + this.sepHappy
    // this.sepUnHappy = Number(j.unhappycountSep) + this.sepUnHappy
    // this.sepNeutral = Number(j.neutralcountSep) + this.sepNeutral


    this.HappyData.push(Number(j.happycountSep)); 
    this.UnHappyData.push(Number(j.unhappycountSep));   
    this.Neutral.push(Number(j.neutralcountSep));
  }
  if(j.MonthNameDesc=="September" && counter >= 1){
    this.HappyData.pop();
    this.UnHappyData.pop();
    this.Neutral.pop();
    this.HappyData.push(Number(j.happycountSep)); 
    this.UnHappyData.push(Number(j.unhappycountSep));   
    this.Neutral.push(Number(j.neutralcountSep));
  }
  if(j.MonthNameDesc=="October"){
    this.HappyData.push(Number(j.happycountOct)); 
    this.UnHappyData.push(Number(j.unhappycountOct));  
    this.Neutral.push(Number(j.neutralcountOct)); 
  }

  
}
counter = 0;
for(var j of Dashdata){
  
  if(j.MonthNameDesc=="September" && this.counter == 0){
    this.counter = this.counter+ 1;
    this.HappyData.push(this.sepHappy ); 
    this.UnHappyData.push( this.sepUnHappy );   
    this.Neutral.push(this.sepNeutral);
  }

  
}

console.log(this.HappyData)
console.log(this.UnHappyData)
console.log(this.Neutral)

  for(var i of this.lineChartData){
    
    if(i.label=="Unhappy patients"){      
      i.data=this.UnHappyData;
    }
    if(i.label=="Happy patients"){      
      i.data=this.HappyData;
    }
    if(i.label=="Neutral patients"){      
      i.data=this.Neutral;
    }
  }
}
public lineChartLabels:Array<any> = ['August','September','October'];
public lineChartOptions:any = {
  responsive: true
};
public lineChartColors:Array<any> = [
  
 
  { 
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(242, 38, 19, 1)',
    pointBackgroundColor: 'rgba(242, 38, 19, 1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(242, 38, 19, 1)'
  },
  { 
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(46, 204, 113, 1)',
    pointBackgroundColor: 'rgba(46, 204, 113, 1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(46, 204, 113, 1)'
  },
  { 
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(243, 156, 18, 1)',
    pointBackgroundColor: 'rgba(243, 156, 18, 1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(243, 156, 18, 1)'
  },
  
  
];
public lineChartLegend:boolean = true;
public lineChartType:string = 'line';

public randomize():void {
  let _lineChartData:Array<any> = new Array(this.lineChartData.length);
  for (let i = 0; i < this.lineChartData.length; i++) {
    _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
    for (let j = 0; j < this.lineChartData[i].data.length; j++) {
      _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    }
  }
  this.lineChartData = _lineChartData;
}

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}
getFinalData(){  
  var result:any[];
  result=[{"MonthNameDesc":"August","HappyIndex":"Happy","NumberOfPatients":5},{"MonthNameDesc":"August","HappyIndex":"Neutral","NumberOfPatients":10},{"MonthNameDesc":"September","HappyIndex":"Happy","NumberOfPatients":5},{"MonthNameDesc":"September","HappyIndex":"UnHappy","NumberOfPatients":2},{"MonthNameDesc":"October","HappyIndex":"Happy","NumberOfPatients":2}];
  return result;
//   this.trailmateService.getTrialmateDashboard()
//   .subscribe(result => {
//      this.dashboarddetails = result 
//      return this.dashboarddetails;
//      console.log('this.dashboarddetails' + this.dashboarddetails)
// } );  
}

getDashBoardData(){
  var Dashdata:any=[]; 
  var happycountAug=0;
  var unhappycountAug=0;
  var neutralcountAug=0;
  var happycountSep=0;
  var unhappycountSep=0;
  var neutralcountSep=0;
  var happycountOct=0;
  var unhappycountOct=0;
  var neutralcountOct=0;
  
  Dashdata=this.getFinalData();
for(var i of Dashdata){
if(i.MonthNameDesc=='August'){
if( i.HappyIndex=='Happy'){
  happycountAug=i.NumberOfPatients;
}
if(i.HappyIndex=='UnHappy'){
  unhappycountAug=i.NumberOfPatients;
}
if(i.HappyIndex=='Neutral'){
  neutralcountAug=i.NumberOfPatients;
}
var obj={MonthNameDesc:i.MonthNameDesc, happycountAug,unhappycountAug,neutralcountAug};
this.finalData.push(obj);
}
if(i.MonthNameDesc=='September'){
if( i.HappyIndex=='Happy'){
  
    happycountSep=i.NumberOfPatients;
}
if( i.HappyIndex=='UnHappy'){
    unhappycountSep=i.NumberOfPatients;
  }
  if(i.HappyIndex=='Neutral'){
    neutralcountSep=i.NumberOfPatients;
  }
  var obj1={MonthNameDesc:i.MonthNameDesc, happycountSep,unhappycountSep,neutralcountSep};
  this.finalData.push(obj1);
  }
  if(i.MonthNameDesc=='October'){
    if(i.HappyIndex=='Happy'){
      happycountOct=i.NumberOfPatients;
    }
    if(i.HappyIndex=='UnHappy'){
      unhappycountOct=i.NumberOfPatients;
    }
    if(i.HappyIndex=='Neutral'){
      neutralcountOct=i.NumberOfPatients;
    }
    var obj2={MonthNameDesc:i.MonthNameDesc, happycountOct,unhappycountOct,neutralcountOct};
    this.finalData.push(obj2);
    }
    
  }
  return this.finalData;
}


}