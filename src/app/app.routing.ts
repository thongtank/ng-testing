import { PageCreateComponent } from './pages/page-create/page-create.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PageListComponent } from './pages/page-list/page-list.component';
/**
 * กำหนดเส้นทางของเว็บไซต์ด้วย Routes Module ใส่ในตัวแปร appRoutes[]
 * โดย { path : 'url', component : ComponentOfPath };
 */
const appRoutes: Routes = [
    /**
    // Start When Multiple outlet with outlet name
    { path: '', children: [
        {
            path: '', component: AboutComponent, outlet: 'about'
        },
        {
            path: '', component: HomeComponent
        }
    ]}, // End When Multiple outlet
    */
    { path: '', component: HomeComponent },
    { path: 'pages', component: PageListComponent },
    { path: 'create', component: PageCreateComponent },
    { path: 'about', component: AboutComponent}
];

// เรา export ตัวแปรประเภทค่าคงที่ (const) ชื่อ routing ออกไป
// routing นี้เป็นผลลัพธ์จากการเรียก RouterModule.forRoot(appRoutes)
// โดย routing ของเราเป็น ModuleWithProviders
// เพื่อนๆคนไหนไม่เข้าใจว่าทำไมเราต้องเขียน routing: ModuleWithProviders
// แนะนำให้อ่าน ชุดบทความสอนใช้งาน TypeScript ที่ https://www.babelcoder.com/blog/series/typescript ครับ

// ป้อนเส้นทางจาก appRoutes ให้กับ RootModule ของ RouterModule เพื่อให้ทราบเส้นทาง
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
