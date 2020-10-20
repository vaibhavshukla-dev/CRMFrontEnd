import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  
  fileUploaded : BehaviorSubject<any>= new BehaviorSubject<any>(null);

  constructor() { }

  public showLoader(){
    var loaderElm = document.getElementById("ftco-loader");
    loaderElm.classList.add("show");
  }

  public hideLoader(){
    var loaderElm = document.getElementById("ftco-loader");
    loaderElm.classList.remove("show");
  }

  public findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
  }
}
