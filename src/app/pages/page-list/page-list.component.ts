import { PageService } from '../shared/page.service';
import { Component, OnInit } from '@angular/core';
import { Page } from '../../pages/shared/page.model';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  pages: Page[];
  constructor(private pageService: PageService) { }

  // เมื่อ PageListComponent ถูกเรียก ngOnInit() จะถูกเรียกขึ้นมาทำงานเป็นอันดับแรก
  ngOnInit() {
    this.getPages();
  }

  getPages() {
    this.pageService.getPages()
      .subscribe(respages => {
        this.pages = respages;
        // console.log(respages);
      },
      error => console.log('Error: '   + error));
  }
}
