import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColDetails, TableAndColumnDetails, TableDetails } from '../Models/table';

@Injectable({providedIn: 'root'})
export class DynamicTableService {

  apiURL = 'http://localhost:8080/table';

  constructor(private http: HttpClient) {}

  getColumnDetails() {
    return this.http.get<ColDetails[]>(this.apiURL + '/GetAllColumnDetails/'+1);
  }


  getTableDetails() {
    return this.http.get<TableDetails>(this.apiURL + '/GetTableDetailsById/'+1);
  }


  getAllTableData() {
      return this.http.get<TableAndColumnDetails[]>(this.apiURL + '/getAllTableData');
    }


    CreateTable(data: any) {
      return this.http.post(this.apiURL + '/CreateNewTable',data);
    }


}
