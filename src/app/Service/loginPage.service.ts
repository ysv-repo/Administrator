import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../Models/UserInfo';

@Injectable({ providedIn: 'root' })
export class LoginPage {
  // apiURL = 'http://localhost:8080/Admin/';
  apiURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<UserInfo[]>(this.apiURL + 'auth/GetAllUsers');
  }

  getUserById(id: number) {
    return this.http.get<UserInfo>(this.apiURL + 'auth/GetUser/' + id);
  }

  getUserByUsername(username: string) {
    return this.http.get<UserInfo>(
      this.apiURL + 'auth/GetUserByUsername/' + username
    );
  }

  CreateUserDetails(data: any) {
    return this.http.post(this.apiURL + 'auth/CreateUser', data);
  }

  ValidateUserLogin(data: any) {
    return this.http.post(this.apiURL + 'auth/Authenticate', data);
  }

  updateUserDetails(data: any) {
    return this.http.post(this.apiURL + 'auth/UpdateUser', data);
  }

  enableDisableUser(data: any) {
    return this.http.post(this.apiURL + 'auth/enableDisableUser/', data);
  }

  uploadProfilePic(data: any) {
    return this.http.post(this.apiURL + 'auth/uploadProfilePic', data);
  }

  loadProfilePicData(userId: number) {
    return this.http.get(this.apiURL + 'auth/getImageData/' + userId);
  }
}
