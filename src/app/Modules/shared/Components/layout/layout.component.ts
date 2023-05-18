import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/Models/UserDetails';
import { LoginPage } from 'src/app/Service/loginPage.service';
import { storageService } from 'src/app/Service/storageService';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements AfterViewInit {
  sideNav: boolean = false;
  userName: string = '';
  loggedInUserDetails: UserDetails;
  retrieveResonse: any;
  retrievedImage: any;
  showFiller: boolean = false;
  constructor(
    public route: Router,
    public localStorage: storageService,
    public loginService: LoginPage,
  ) {}

  ngOnInit(): void {
    this.userName = this.localStorage.getSessionItem('userName');
    this.loginService.getUserByUsername(this.userName).subscribe((data) => {
      this.loggedInUserDetails = data;
      this.loadImageData(this.loggedInUserDetails);
    });
  }

  ngAfterViewInit(): void {
    this.userName = this.localStorage.getSessionItem('userName');
    this.loginService.getUserByUsername(this.userName).subscribe((data) => {
      this.loggedInUserDetails = data;
      this.loadImageData(this.loggedInUserDetails);
    });
  }


  logout() {
    sessionStorage.clear();
    this.route.navigate(['']);
  }

  loaduserDetails(userName: string) {
    return this.loginService.getUserByUsername(userName).subscribe((data) => {
      this.loggedInUserDetails = data;
    });
  }

  loadImageData(data: any) {
    this.loginService.loadProfilePicData(data.userId).subscribe((img) => {
      this.retrieveResonse = img;
      this.retrievedImage =
        'data:image/jpeg;base64,' + this.retrieveResonse.picByte;
      data.picByte = this.retrievedImage;
    });
  }
}




