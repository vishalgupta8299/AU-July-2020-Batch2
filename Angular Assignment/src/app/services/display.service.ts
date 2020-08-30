import { User } from './../user';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  url = '/display';
  public jsonData: any;
  constructor(private router: Router, http: HttpClient) { }

  display(user: User){
    this.jsonData = JSON.stringify(user);
    window.localStorage['user-form'] = this.jsonData;
    console.log(this.jsonData);
    this.router.navigate(['/display']);
  }

}
