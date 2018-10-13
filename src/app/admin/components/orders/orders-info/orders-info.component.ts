import {Component, Input, OnInit} from '@angular/core';
import {FormatUtils} from '../../../../utils/FormatUtils';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LogicalUtils} from '../../../../utils/LogicalUtils';
import {DataSource} from '@angular/cdk/table';
import {UserService} from './orders-info.service';
import {Observable} from 'rxjs';
import {Order} from '../../../../model/order';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-orders-info',
  templateUrl: './orders-info.component.html',
  styleUrls: ['./orders-info.component.css']
})
export class OrdersInfoComponent implements OnInit {

  @Input() order: string;
  bookingProducts: Object[] = [];
  currency = FormatUtils.currency;


  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'quantity', 'sale','totalPrice'];

  constructor(private http: HttpClient, private userService: UserService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,application/json');
    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    this.http
      .post('https://products-order.herokuapp.com/orders', {orderId: this.order}, {headers: headers})
      .subscribe((data: Object[]) => {
        this.bookingProducts = data;
        console.log(data)
      });

  }

  getTotalPrice() {
    return LogicalUtils.arrayIsEmpty(this.bookingProducts) ? 0 : this.currency(this.bookingProducts.map(f => f['totalPrice']).reduce((f1, f2) => f1 + f2));
  }
}

export class UserDataSource extends DataSource<any> {
  order: string = '000002';

  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<Order[]> {
    return this.userService.getUser(this.order);
  }

  disconnect() {
  }
}

