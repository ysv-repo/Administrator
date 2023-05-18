import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserDetails } from 'src/app/Models/UserDetails';
import { LoginPage } from 'src/app/Service/loginPage.service';
import { LayoutComponent } from '../../shared/Components/layout/layout.component';
import { ConfirmationdialogComponent } from '../../customcomponents/confirmationdialog/confirmationdialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
getConfirmationValue($event: Event) {
throw new Error('Method not implemented.');
}
  userDetais: UserDetails[] = [];
  displayedColumns: string[] = [
    'Full Name',
    'User Name',
    'Designation',
    'Status',
  ];
  dataSource = new MatTableDataSource<UserDetails>();

  single: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#198754', '#ffc720', '#dc3545'],
  };

  constructor(public loginService: LoginPage, public layout: LayoutComponent) {}

  AllUsers: UserDetails[] = [];
  ActiveUsers: UserDetails[] = [];
  InActiveUsers: UserDetails[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.loginService.getAllUsers().subscribe((data) => {
      if (data) {
        this.AllUsers = data;
        this.ActiveUsers = data.filter((d) => d.activeflag == true);
        this.InActiveUsers = data.filter((d) => d.activeflag == false);

        console.log(
          'ngOnInit() ==>',
          this.AllUsers.length,
          this.ActiveUsers.length,
          this.InActiveUsers.length
        );

        this.single = [
          {
            name: 'All',
            value: this.AllUsers.length,
          },
          {
            name: 'Active',
            value: this.ActiveUsers.length,
          },
          {
            name: 'InActive',
            value: this.InActiveUsers.length,
          },
        ];
      }
    });
  }

  loadAllUsers() {
    this.dataSource = new MatTableDataSource<UserDetails>(this.AllUsers);
    setTimeout(() => (this.dataSource.paginator = this.paginator));
  }

  loadActiveUsers() {
    this.dataSource = new MatTableDataSource<UserDetails>(this.ActiveUsers);
    setTimeout(() => (this.dataSource.paginator = this.paginator));
  }

  loadInActiveUsers() {
    this.dataSource = new MatTableDataSource<UserDetails>(this.InActiveUsers);
    setTimeout(() => (this.dataSource.paginator = this.paginator));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    if (data.label == 'All') {
      this.loadAllUsers();
    }
    if (data.label == 'Active') {
      this.loadActiveUsers();
    }
    if (data.label == 'InActive') {
      this.loadInActiveUsers();
    }
  }

  @ViewChild('confirmationModal')
  private modalComponent!: ConfirmationdialogComponent;
  modalStyle: string = 'modal-style-primary';
  modalTitle: string = 'Info Confirmation';
  modalBody: string = 'This is a Information Confirmation message';
  modalButtonColor: string = 'btn-primary';
  async openModal() {
    return await this.modalComponent.open();
  }



}
