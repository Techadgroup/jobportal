import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Data } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ProjectModel } from '../dashboard/project.model';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpClient: any;


  constructor(private _http:HttpClient) { }


login(password:string,username:any){
  
  return this._http.post<ProjectModel>(baseUrl + '/signin' , password,username)
}


signup(data:any){
 
  return this._http.post<ProjectModel>(baseUrl + '/signup' ,data)
}







}