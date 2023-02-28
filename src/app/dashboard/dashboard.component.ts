import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';
import { ProjectModel } from './project.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loginObj!: FormGroup ;
  signupObj!: FormGroup;
  project!: ProjectModel;
  isLoggedIn = false;
  username!: string;
  email!: string;
  password!: string;
  name!:string;
  role!:string;
  telephone!:'';
  showSignUp = false;



  constructor(private router:Router, private api: ApiService, private modalService: NgbModal) { }
    ngOnInit() : void{
 



  }
  


  onLogin() {
    this.isLoggedIn = true;
    this.api.login(this.loginObj.getRawValue().username,this.loginObj.getRawValue().password).subscribe(
      res=>{
        this.modalService.dismissAll();
        this.ngOnInit;
       
      }
      
    )
      
        this.isLoggedIn = true;
        sessionStorage.setItem('username', this.username);
        sessionStorage.setItem('password', this.password);
    
        this.isLoggedIn = true;
    console.log(this.loginObj.getRawValue()) 
  
  
}


   onSignup() {
    this.api.signup(this.signupObj.getRawValue()).subscribe(
      (res)=>{
        this.modalService.dismissAll();
        this.ngOnInit;
        this.isLoggedIn = false;
      }
      
    )
    const username = this.signupObj.value.email;
      const password = this.signupObj.value.password;
      this.isLoggedIn = true;
      this.username = username;
      sessionStorage.setItem('username', this.username);
      sessionStorage.setItem('email', this.email);
      sessionStorage.setItem('password', this.password);
      sessionStorage.setItem('name', this.name);
      sessionStorage.setItem('role', this.role);
      sessionStorage.setItem('telephone', this.telephone);
    console.log(this.signupObj.getRawValue()) 

   }

  
  logout()
{
  this.isLoggedIn = false;
  this.username = '';
}


openapply(contentapply: any){
  this.modalService.open(contentapply)
  
}
openlogin(contentlogin: any){
  
  this.modalService.open(contentlogin)
 
  this.ngOnInit;
}

opensignup(contentsignup: any){
  
  this.modalService.open(contentsignup)
  
  this.ngOnInit;
  
}

opencontact(contentcontact: any){
  
  this.modalService.open(contentcontact)
  
  this.ngOnInit;
  
}

}

