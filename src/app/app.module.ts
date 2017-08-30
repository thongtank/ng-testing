import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PageService } from './pages/shared/page.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// นำ routing moudule ที่เราสร้างไว้มาใช้จากไฟล์ ./app.routing.ts
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { AboutComponent } from './about/about.component';
import { PageCreateComponent } from './pages/page-create/page-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageListComponent,
    AboutComponent,
    PageCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // Routing is Here
    routing
  ],
  providers: [
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
