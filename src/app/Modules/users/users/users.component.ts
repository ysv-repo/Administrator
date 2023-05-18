import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserDetails } from 'src/app/Models/UserDetails';
import { UserInfo } from 'src/app/Models/UserInfo';
import { LoginPage } from 'src/app/Service/loginPage.service';
import { storageService } from 'src/app/Service/storageService';
import { ConfirmationdialogComponent } from '../../customcomponents/confirmationdialog/confirmationdialog.component';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
import { MatSort } from '@angular/material/sort';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[MessageService]
})
export class UsersComponent {

  isPasswordMatching: boolean = false;
  userDetais: UserDetails[] = [];
  displayedColumns: string[] = [
    'profilePic',
    'userName',
    'firstName',
    'lastName',
    'designation',
    'contactNo',
    'email',
    'activeflag',
    'Action',
  ];
  dataSource = new MatTableDataSource<UserInfo>();
  AllUsers: UserInfo[];
  showAddPopUp: boolean;
  editUserdetails: any;
  showEditPopup: boolean;
  userNameNotAvailable: boolean = false;
  ele: any = {};
  selectedFile: File;
  retrieveResonse: any;
  retrievedImage: any;
  showUploadProfilePic: boolean;
  message: string;

  constructor(
    public loginService: LoginPage,
    public storageService: storageService,
    private messageService: MessageService,

  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  ngOnInit() {
    this.showEditPopup = false;
    this.showAddPopUp = false;
    this.showUploadProfilePic = false;
    this.loginService.getAllUsers().subscribe((data) => {
      if (data) {
        console.log('data--->', data);

        this.AllUsers = data;
        for (let i = 0; i < data.length; i++) {
          this.loadImageData(data[i]);
        }
        this.dataSource = new MatTableDataSource<UserInfo>(data);
        setTimeout(() => (this.dataSource.paginator = this.paginator));
      }
    });
  }

  editDetails(ele: Element) {
    this.editUserdetails = ele;
    this.loadImageData(this.editUserdetails);
    this.showEditPopup = true;
    console.log(ele);
  }

  addDetails() {
    this.showAddPopUp = true;
    this.editUserdetails = this.ele;
  }

  CreateUserDetails() {
    console.log('inside CreateUserDetails() ');
    this.loginService
      .CreateUserDetails(this.editUserdetails)
      .subscribe((data) => console.log(data));
    this.showAddPopUp = false;
    setTimeout(() => this.ngOnInit());
  }

  updateUserDetails() {
    console.log('inside updateUserDetails() ');
    this.loginService
      .updateUserDetails(this.editUserdetails)
      .subscribe((data) => {
        console.log(data);
      });
    this.showEditPopup = false;
  }

  showUploadProfilePicDialog(ele: Element) {
    this.showUploadProfilePic = true;
    this.editUserdetails = ele;
    console.log(this.editUserdetails.userName);
  }

  uploadProfilePicture() {
    const uploadImageData = new FormData();
    uploadImageData.append(
      'imageFile',
      this.selectedFile,
      this.editUserdetails.userId
    );
    this.loginService
      .uploadProfilePic(uploadImageData)
      .subscribe((response) => {
        console.log(response);
      });
  }

  checkPassword(passwd: string, confPasswd: string) {
    console.log(passwd, '---', confPasswd);
    if (passwd != confPasswd) {
      console.log('inside password not Matching');
      this.isPasswordMatching = true;
    }
  }

  checkUserNameAvailability(uName: string) {
    console.log('inside checkUserNameAvailability');

    this.userDetais.filter((u) => {
      if (u.userName == uName) {
        this.userNameNotAvailable = true;
      }
    });
  }

  chooseProfilePic(event) {
    this.selectedFile = event.target.files[0];
  }

  loadImageData(data: any) {
    this.loginService.loadProfilePicData(data.userId).subscribe((img) => {
      if (img) {
        this.retrieveResonse = img;
        this.retrievedImage =
          'data:image/jpeg;base64,' + this.retrieveResonse.picByte;
        data.picByte = this.retrievedImage;
      }
    });
  }

  @ViewChild('confirmationModal')
  private modalComponent!: ConfirmationdialogComponent;
  @ViewChild(MatSort) sort: MatSort;


  modalBody: string;

  async enableDisableUser(element: any) {
    this.message = element.activeflag != true ? ' disable' : ' enable';
    this.modalBody = 'Are you sure you want to ' + this.message + ' user ?';
    this.editUserdetails = element;
    await this.modalComponent.open();
  }

  getConfirmationValue(flg) {
    if (flg + '' == 'true') {
      this.loginService
        .enableDisableUser(this.editUserdetails)
        .subscribe((data) => console.log(data));
        this.messageService.add({
          severity: 'success',
          detail: "User"+this.message+"d Sucessfully!"
        });
    } else {
      this.ngOnInit();
    }
  }

  toPdf() {
    const doc = new jsPDF();
    autoTable(doc,{ html: '#user_table' });
    doc.save('Users.pdf');
  }
}
