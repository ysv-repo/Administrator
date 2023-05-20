import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ColDetails, Table, TableDetails } from 'src/app/Models/table';
import { Constants } from 'src/app/Service/constants';
import { DynamicTableService } from 'src/app/Service/dynamicTable.service';

@Component({
  selector: 'app-dynamic-table-creator',
  templateUrl: './dynamic-table-creator.component.html',
  styleUrls: ['./dynamic-table-creator.component.css'],
})
export class DynamicTableCreatorComponent {
  constructor(
    private dynamicTableCreator: DynamicTableService,
    public messageService: MessageService
  ) {}

  tableName: any;
  tableInstructions: any;
  columns: ColDetails[];
  tableDetails: TableDetails;
  table: Table;
  datatypes: string[];
  Uoms: string[];
  public const: Constants;
  Genders: String[] = ['Male', 'Female'];

  ngOnInit(): void {
    this.columns = COL_DATA;
    this.Uoms = UOMS;
    this.datatypes = DATA_TYPES;
  }

  insertColumn(position: number) {
    const col = {
      tableId: null,
      serialNo: null,
      columnName: null,
      dataType: null,
      lowerLimit: null,
      upperLimit: null,
      uom: null,
    };
    this.columns.splice(position, 0, col);
  }
  removeColumn(position: number) {
    let arr = this.columns;
    delete arr[position];
    this.columns = arr;
  }

  SaveTable() {
    this.table = {
      tableDetails: {
        tableId: null,
        tableName: this.tableName,
        tableInstructions: this.tableInstructions,
      },
      colDetails: this.columns,
    };

    this.dynamicTableCreator.CreateTable(this.table).subscribe((data) => {
      if (data) {
        this.messageService.add({
          severity: 'success',
          detail: 'Table Created Sucessfully!',
        });
      }
    });
    this.ngOnInit()
  }

}

const COL_DATA = [
  {
    tableId: null,
    serialNo: null,
    columnName: null,
    dataType: null,
    lowerLimit: null,
    upperLimit: null,
    uom: null,
  },
  {
    tableId: null,
    serialNo: null,
    columnName: null,
    dataType: null,
    lowerLimit: null,
    upperLimit: null,
    uom: null,
  },
];

const UOMS = [
  'g',
  'mg',
  'ml',
  'lts',
  'kg',
  'Units',
  'No',
  'EA',
  'TS',
  'Bottles',
  '%',
];

const DATA_TYPES = ['int', 'date', 'string', 'gender', 'decimal'];
