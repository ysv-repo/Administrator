export interface TableDetails {
  tableId: number;
  tableName: string;
  tableInstructions: string;
}
export interface ColDetails {
  tableId: number;
  serialNo: number;
  columnName: string;
  dataType: string;
  lowerLimit: number;
  upperLimit: number;
  uom: string;
  activeFlag : boolean;
}

export interface tableData {
  details : String[];
  editflag : boolean;
}

export interface TableAndColumnDetails {
  tableId: number;
  tableDetails: TableDetails;
  colDetails: ColDetails[];
  tableData: tableData[];
}


export interface Table{
  tableDetails:TableDetails
  colDetails: ColDetails[];
}
