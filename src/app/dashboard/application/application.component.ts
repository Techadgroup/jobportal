import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from '../dashboard.component'; 
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

export class ApplicationComponent {
  constructor(private router:Router, private api: ApiService, private modalService: NgbModal) { }


    ngOnInit() : void{
    

  }
  


  opencontact(contentcontact: any){
  
    this.modalService.open(contentcontact)
    
    this.ngOnInit;
    
  }

}
