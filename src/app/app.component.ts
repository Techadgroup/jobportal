import { Component } from '@angular/core';




interface JOBS{
  id: Number;
  header: String;
  content: String;
}
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'portalfortag';

  // Jobs: JOBS[]= JobsJson;

  // constructor(){
  //   console.log(this.Jobs);
  // }
  
}