import {Component, Input, OnInit} from '@angular/core';
import {LogicalUtils} from '../../../../utils/LogicalUtils';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormatUtils} from '../../../../utils/FormatUtils';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() order: string;
  bookingProducts: Object[] = [];
  currency = FormatUtils.currency;

  constructor(private http: HttpClient  ) { }

  ngOnInit() {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,application/json');
    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append("Access-Control-Allow-Credentials", 'true');
    this.http
      .post('https://products-order.herokuapp.com/orders', {orderId: this.order}, {headers: headers})
      .subscribe((data: Object[]) => {
        this.bookingProducts = data;
      });
  }

  ngOnChanges(){

  }

  getTotalPrice(){
    return LogicalUtils.arrayIsEmpty(this.bookingProducts) ? 0 : this.currency(this.bookingProducts.map(f => f['totalPrice']).reduce((f1, f2) => f1 + f2));
  }
}
