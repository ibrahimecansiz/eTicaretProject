import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { CreateProduct } from 'src/app/contracts/create_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BaseComponent implements OnInit{

  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertify: AlertifyService) {
    super(spinner);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  create(name:HTMLInputElement, stock:HTMLInputElement, price:HTMLInputElement){
    this.showSpinner(SpinnerType.BallAtom);
    const createProduct: CreateProduct = new CreateProduct();
    createProduct.name = name.value;
    createProduct.price = parseInt(price.value);
    createProduct.stock = parseFloat(stock.value);

    this.productService.create(createProduct, () =>
      this.hideSpinner(SpinnerType.BallAtom);
      this.alertify.message("Ürün başarıyla eklenmiştir",{
        dismissOthers : true,
        messageType : MessageType.Success,
        position : Position.BottomRight
      })
    )
  }
}
