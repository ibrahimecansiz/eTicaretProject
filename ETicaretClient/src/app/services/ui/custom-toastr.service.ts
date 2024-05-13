import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";


@Injectable({
  providedIn: "root"
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }
  msj(message: string, title : string, messageType: ToastrMessageType, position: ToastrPosition){
    this.toastr.show(message,title, {
      positionClass: position,
    },messageType)
  }

}

export class ToastrOptions {
  messageType: ToastrMessageType;
  position: ToastrPosition
}

export enum ToastrMessageType{
  Error = "toast-error",
  Info = "toast-info",
  Success = "toast-success",
  Warning = "toast-warning",
}

export enum ToastrPosition{
TopRight = "toast-top-right",
BottomRight  = "toast-bottom-right",
BottomLeft  = "toast-bottom-right",
TopLeft  = "toast-top-left",
TopFullWidth  = "toast-full-width",
BottomFullWidth  = "toast-bottom-full-width",
TopCenter  = "toast-top-center",
BottomCenter  = "toast-bottom-center",
}
