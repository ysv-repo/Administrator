import { Component } from '@angular/core';
import { storageService } from 'src/app/Service/storageService';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent {

  constructor(
    public localStorage: storageService,
  ){

  }
  breadCrumbArray: any[] = [];
  ngOnInit(): void {
    this.loadBreadCrumbs(window.location.href);
  }

  loadBreadCrumbs(href: string) {
    this.breadCrumbArray = [];
    let url = href.split(this.localStorage.getSessionItem('loginUrl'))[1];
    let bredCrumbStrings = url.split('/');
    let bredUrl = '';
    let ele = '';
    bredCrumbStrings.forEach((element) => {
      ele = element.charAt(0).toUpperCase() + element.slice(1);
      bredUrl = bredUrl + '/' + element;
      let obj: BreadCrumb = { linkName: ele, linkUrl: bredUrl };
      this.breadCrumbArray.push(obj);
    });

    console.log(this.breadCrumbArray);
  }


}

export class BreadCrumb {
  linkName: string;
  linkUrl: string;
}
