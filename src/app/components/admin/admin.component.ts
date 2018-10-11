import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private place: string = "None";

  constructor() {
  }

  ngOnInit() {
  }

  getPlace(){
    return this.place;
  }

}
