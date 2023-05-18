import { Injectable } from "@angular/core";
import * as CryptoJS from 'crypto-js';

@Injectable({ providedIn: 'root' })
export class storageService {
  constructor() { }

  getLocalItem(key: any): any {
    if (
      null != localStorage.getItem(key) ||
      undefined != localStorage.getItem(key)
    ) {
      return this.decrypt(localStorage.getItem(key));
    } else {
    }
  }

  getSessionItem(key: any): any {
    if (
      null != sessionStorage.getItem(key) ||
      undefined != sessionStorage.getItem(key)
    ) {
      return this.decrypt(sessionStorage.getItem(key)).replaceAll('"', '');
      // return  sessionStorage.getItem(key);

    } else {
    }
  }

  setSessionStorageItem(key: any, data: any): any {

    sessionStorage.setItem(key, this.encrypt(data));
    // sessionStorage.setItem(key, data);

  }

  setLocalStorageItem(key: any, data: any): any {

    localStorage.setItem(key, this.encrypt(data));

  }

  encrypt(data: any) {
    let rowData = JSON.stringify(data);
    var encrypted = CryptoJS.AES.encrypt(rowData, 'VINOD');
    return this.stringify(encrypted);
  }

  decrypt(data: any) {
    var decrypted = CryptoJS.AES.decrypt(this.parse(data), 'VINOD');
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  parse(jsonStr) {
    var jsonObj = JSON.parse(jsonStr);
    var cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct),
    });
    if (jsonObj.iv) {
      cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv);
    }
    if (jsonObj.s) {
      cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s);
    }
    return cipherParams;
  }

  stringify(cipherParams) {
    var jsonObj = {
      ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64),
    };
    if (cipherParams.iv) {
      jsonObj['iv'] = cipherParams.iv.toString();
    }
    if (cipherParams.salt) {
      jsonObj['s'] = cipherParams.salt.toString();
    }
    return JSON.stringify(jsonObj);
  }
}
