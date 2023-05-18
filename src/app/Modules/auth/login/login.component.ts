import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { UserDetails } from 'src/app/Models/UserDetails';
import { UserInfo } from 'src/app/Models/UserInfo';
import { LoginPage } from 'src/app/Service/loginPage.service';
import { storageService } from 'src/app/Service/storageService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit{
  isPasswordMatching: boolean = true;
  isLoggedIn: boolean = false;
  username;
  password;
  logo: string =
    'https://media.licdn.com/dms/image/D5603AQEKXvOng7-MxQ/profile-displayphoto-shrink_200_200/0/1682065279437?e=1687996800&v=beta&t=gA_Btv0LGvU8DiVtFpS2RNEZgO_wDSjTE0CLlOUkKxw';
  userDetails: UserDetails;
  userInfo: UserInfo;

  constructor(
    private route: Router,
    public loginService: LoginPage,
    public localStorage: storageService,
    private messageService :MessageService  ) {}
  ngOnInit(): void {
    sessionStorage.clear
    this.localStorage.setSessionStorageItem("loginUrl",window.location.href)
  }

  checkPassword(RegForm: NgForm) {
    if (RegForm.value.password != RegForm.value.cpassword) {
      this.isPasswordMatching = false;
    } else {
      this.isPasswordMatching = true;
    }
  }

  validateByUsername(username: String) {
    this.route.navigate(['user', username]);
  }

  validate() {
    this.loginService
      .ValidateUserLogin({
        userName: this.username,
        password: this.password,
      })
      .subscribe((data) => {
        console.log(data);
        if (data) {
          this.localStorage.setSessionStorageItem('loginFlg', true);
          this.localStorage.setSessionStorageItem('userName', this.username);
          this.route.navigate(['dashboard']);
        } else {
          this.messageService.add({
            severity: 'error',
            detail: 'Invalid Credentials!!',
          });
        }
      });
  }
}
