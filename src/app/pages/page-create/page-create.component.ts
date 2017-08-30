import { concat } from 'rxjs/observable/concat';
import { error } from 'util';
import { PageService } from './../shared/page.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-create',
  templateUrl: './page-create.component.html',
  styleUrls: ['./page-create.component.scss']
})
export class PageCreateComponent implements OnInit {

  pageId: number;
  pageTitle: string;
  pageContent: string;
  createStatus: any;

  constructor(private router: Router, private pageService: PageService) {
    console.log('Load Create Page success...');
  }

  ngOnInit() {
  }

  createPage() {
    // console.log(`id=${this.pageId}, title=${this.pageTitle}, content=${this.pageContent}`);
    this.pageService.createPage(this.pageId, this.pageTitle, this.pageContent)
      .subscribe(resCreate => {
        // this.createStatus = resCreate;
        this.createStatus = resCreate;
        console.log(this.createStatus);
        if (this.createStatus.ok) {
          this.router.navigateByUrl('/pages');
        }
      }, error => console.log('Error: ' + error));
  }

}
