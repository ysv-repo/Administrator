export interface FileUploadDetails {
  file: any;
  excelJson: excelSheetJson[];
  fileName: string;
}

export interface excelSheetJson {
  sheetDetails: any;
  columnLenghts: string;
  sheetName: any;
}
