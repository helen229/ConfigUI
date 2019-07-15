import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-service',
  templateUrl: './choose-service.component.html',
  styleUrls: ['./choose-service.component.css']
})
export class ChooseServiceComponent implements OnInit {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  service: string='DRS'

  constructor(private router: Router) { }

  ngOnInit() {

  }
  
  onChoose(text:string){
    this.service=text;
    console.log("User choose "+this.service);
  }

  //call GETcontent endpoint
  onSubmit(){
    console.log("click Submit "+this.service);
    if (this.service=='DRS') {
      this.router.navigateByUrl('drs');
    } else {
      this.router.navigateByUrl('dps');
    }
    
  }

}
