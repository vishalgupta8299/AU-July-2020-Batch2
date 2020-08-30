import { DisplayService } from './../services/display.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userModel = new User();
  constructor(private displayservice: DisplayService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // console.log(this.userModel);
    this.displayservice.display(this.userModel);
  }


}
