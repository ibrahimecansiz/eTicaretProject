import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateProduct } from 'src/app/contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClientService: HttpClientService) {}

  create(product: CreateProduct, successCallBack?: any, errorCallBack?:any) {
    this.httpClientService
      .post(
        {
          controller: 'products',
        },
        product
      )
      .subscribe(result => {
        successCallBack();
      }, (errorResponse : HttpErrorResponse) => {
        const _error: Array<{ key: string, value: Array<string>}> = errorResponse.error;
        let message = "";
        _error.forEach((_v, index) => {
          message += `${_v.value}<br>`
        });
        errorCallBack(message);
      });
  }
}
