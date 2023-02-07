import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';






@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {




  signupUsers: any[]=[];
  signupObj:any= {
    username: '',
    email:'',
    password:''
  };

  loginObj:any= {
    username: '',
    password:''
  };
jobs: any;

  

  constructor(private router:Router,private activeroute:ActivatedRoute,  private modalService: NgbModal) { }
  private total=0; 
  ngOnInit() {
 
    
  }
  
  logout()
{
  this.router.navigate(["/"]);
}

openapply(contentapply: any){
  
  this.modalService.open(contentapply)
}
openlogin(contentlogin: any){
  
  this.modalService.open(contentlogin)
}

opensignup(contentsignup: any){
  
  this.modalService.open(contentsignup)
  
}

opencontact(contentcontact: any){
  
  this.modalService.open(contentcontact)
  
}
openapplication(contentapplication: any){
  
  this.modalService.open(contentapplication)
}

onSignUp(){
  this.signupUsers.push(this.signupObj);
  localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
  this.signupObj={
    username: '',
    email:'',
    password:''
  }

}

onLogin(){
  const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName &&  m.password == this.loginObj.password );
  if (isUserExist!= undefined){
    alert('user login successful');
  }
  else{
    alert('Wrong credentials')
  }
}
onSubmit(){
  
}


}



