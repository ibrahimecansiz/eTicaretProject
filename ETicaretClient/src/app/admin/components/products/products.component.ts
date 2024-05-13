import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  /**
   *
   */
  constructor(spinner: NgxSpinnerService,private httpClientService: HttpClientService) {
    super(spinner);

  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => console.log(data));

    // this.httpClientService.post({
    //   controller: "products"
    // },{
    //   name: "Kalem",
    //   stock: 100,
    //   price: 15
    // }).subscribe();
    // this.httpClientService.put({
    //   controller: "products"
    // },{
    //   id: "f1686fb3-c3f5-4c1f-856e-b3d2621bab17",
    //   name: "Boyama Kitabı",
    //   stock: 123,
    //   price: 100
    // }).subscribe();

    // this.httpClientService.delete({controller: "products"}, "f1efd94e-72f2-4d81-9e9e-7a891bff7c8d").subscribe();
  }

}
