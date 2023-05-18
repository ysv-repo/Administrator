import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from 'primeng/api';
import { LoginPage } from 'src/app/Service/loginPage.service';
import { storageService } from 'src/app/Service/storageService';

@Component({
  selector: 'app-inlinetable',
  templateUrl: './inlinetable.component.html',
  styleUrls: ['./inlinetable.component.css'],
})
export class InlinetableComponent {

  displayedColumns: string[] = [
    'Display Picture',
    'userName',
    'firstName',
    'lastName',
    'designation',
    'contactNo',
    'email',
    'Action',
  ];

  uploadImageData = new FormData();
  dataSource = new MatTableDataSource<any>();
  displayAddNewBtn: boolean;
  retrievedImage: any;
  uploadedFile: any;
  dpChanged: any;
  filename: any;
  userId: string;
  UserForm: FormGroup;

  constructor(
    public loginService: LoginPage,
    public storageService: storageService,
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}



  ngOnInit() {
    this.filename = '';
    this.displayAddNewBtn = true;
    this.loginService.getAllUsers().subscribe((data) => {
      if (data) {
        console.log(data);
        this.UserForm = this._formBuilder.group({
          UserRows: this._formBuilder.array([]),
        });

        this.UserForm = this.fb.group({
          UserRows: this.fb.array(
            data.map((val) =>
              this.fb.group({
                userId: new FormControl(val.userId),
                picByte: new FormControl(val.picByte),
                activeflag: new FormControl(val.activeflag),
                userName: new FormControl(val.userName),
                password: new FormControl(val.password),
                firstName: new FormControl(val.firstName),
                lastName: new FormControl(val.lastName),
                designation: new FormControl(val.designation),
                contactNo: new FormControl(val.contactNo),
                email: new FormControl(val.email),
                isReadOnly: new FormControl(false),
              })
            )
          ),
        });

        this.dataSource = new MatTableDataSource(
          (this.UserForm.get('UserRows') as FormArray).controls
        );
        const filterPredicate = this.dataSource.filterPredicate;
        this.dataSource.filterPredicate = (data: AbstractControl, filter) => {
          return filterPredicate.call(this.dataSource, data.value, filter);
        };
      }
    });
  }

  editRowData(formElement, index) {
    formElement.get('UserRows').at(index).get('isReadOnly').patchValue(true);
  }

  saveRowData(ele: any ) {
    if (!this.displayAddNewBtn) {
      this.loginService.CreateUserDetails(ele).subscribe((data) => {
        if (data) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'User Details Added Successfully',
          });

          setTimeout(() => {
            this.userId = data['userId'];
          }, 100);
        }
      });
    } else {
      this.loginService.updateUserDetails(ele).subscribe((data) => {
        if (data) {

            console.log("====>",parseInt(data['userId']));
            this.userId = data['userId'];

          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'User Details Updated Successfully',
          });
        }
      });
    }

    console.log(this.userId);


    setTimeout(() => {
      if (this.dpChanged && this.filename != '') {
        this.uploadimageData();
      }
    }, 500);
    setTimeout(() => {
      this.ngOnInit();
    },500)

  }

  private uploadimageData() {
    console.log('--->inside Upload image', this.userId);

    this.uploadImageData.append(
      'imageFile',
      this.uploadedFile,
      this.userId
    );
    this.loginService
      .uploadProfilePic(this.uploadImageData)
      .subscribe((data) => {
        console.log(data);
      });
  }

  AddNewRow() {
    this.displayAddNewBtn = false;
    const control = this.UserForm.get('UserRows') as FormArray;
    control.insert(0, this.initiateUserForm());
    this.dataSource = new MatTableDataSource(control.controls);
  }

  initiateUserForm(): FormGroup {
    return this.fb.group({
      userName: new FormControl(''),
      password: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      designation: new FormControl(''),
      contactNo: new FormControl(''),
      email: new FormControl(''),
      isReadOnly: new FormControl(true),
    });
  }

  chooseDP(event) {
    this.uploadedFile = event.target.files[0];
    this.dpChanged = true;
    this.filename = event.target.files[0].name;
  }

  removeDP() {
    this.uploadedFile = new File([], '');
    this.dpChanged = true;
    this.filename = '';
  }
}
