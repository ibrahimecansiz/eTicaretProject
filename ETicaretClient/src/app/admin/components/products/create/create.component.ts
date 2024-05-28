import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { CreateProduct } from 'src/app/contracts/create_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';
import { FileUploadOptions } from '../../../../services/common/file-upload/file-upload.component';

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

  }

  @Output() createdProduct: EventEmitter<CreateProduct> = new EventEmitter();
  @Output() fileUploadOptions: Partial<FileUploadOptions> = {
    action: "upload",
    controller: "products",
    explanation: "Resimleri yükleyin ve seçin",
    isAdminPage: true,
    accept: ".png, .jpg, .jpeg"
  }

  create(name:HTMLInputElement, stock:HTMLInputElement, price:HTMLInputElement){
    this.showSpinner(SpinnerType.BallAtom);
    const createProduct: CreateProduct = new CreateProduct();
    createProduct.name = name.value;
    createProduct.price = parseInt(price.value);
    createProduct.stock = parseFloat(stock.value);

    this.productService.create(createProduct, () => {
      this.hideSpinner(SpinnerType.BallAtom);
      this.alertify.message("Ürün Başarıyla Eklenmiştir", {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.BottomRight
      });
      this.createdProduct.emit(createProduct);
    }, errorMessage => {
      this.alertify.message(errorMessage,{
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight
      });

    });
  }
}
