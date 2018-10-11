import {Component, Inject, OnInit} from '@angular/core';
import {FormatUtils} from '../../../../utils/FormatUtils';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Product} from '../../../../model/product';
import {LogicalUtils} from '../../../../utils/LogicalUtils';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  totalPrice: number;
  currency = FormatUtils.currency;

  constructor(public thisDialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public product: Product) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    console.log(this.totalPrice);
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

  getOrDefaultNumber(){
    return (this.totalPrice === null || this.totalPrice === undefined) ?  0: this.totalPrice;
  }

  getTotalPrice(){
    return FormatUtils.currency(LogicalUtils.numberIsNull(this.totalPrice));
  }

  onKey(event){
    if(this.totalPrice!==event.target.value){
      this.totalPrice = event.target.value/this.product.factor*this.product.price;
    }
  }

}
