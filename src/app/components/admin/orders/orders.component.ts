import {Component, Input, OnInit} from '@angular/core';
import {FormatUtils} from '../../../utils/FormatUtils';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderIds: string[] = [];
  order: string;
  showDetails: boolean = false;

  constructor(private http: HttpClient  ) { }

  ngOnInit() {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,application/json');
    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append("Access-Control-Allow-Credentials", 'true');
    this.http
      .get('https://products-order.herokuapp.com/orders', {headers: headers})
      .subscribe((data: string[]) => {
        this.orderIds = data;
        console.log(data)
      });
  }

  print(order){
    this.order = order;
    this.showDetails = true;
  }

}
