import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-data-product',
  templateUrl: './data-product.component.html',
  styleUrls: ['./data-product.component.css']
})
export class DataProductComponent implements OnInit {

  panelColor = new FormControl('name');

  constructor() { }

  ngOnInit() {
  }

}
