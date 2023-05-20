import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColDetails, Table, TableAndColumnDetails, TableDetails } from '../Models/table';

@Injectable({ providedIn: 'root' })
export class DynamicTableService {

  apiURL = 'http://localhost:8080/table';

  constructor(private http: HttpClient) { }


  getAllTableData() {
    return this.http.get<TableAndColumnDetails[]>(this.apiURL + '/getAllTableData');
  }


  CreateTable(data: any) {
    return this.http.post(this.apiURL + '/CreateNewTable', data);
  }

  update(table: Table) {
    return this.http.post(this.apiURL + '/UpdateExistingTable', table);
  }


}
