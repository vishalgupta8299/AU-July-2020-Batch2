import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public accessJSON;
  constructor(){
    this.accessJSON = JSON.parse(window.localStorage['user-form']);
  }

  ngOnInit(): void {
  }

}
