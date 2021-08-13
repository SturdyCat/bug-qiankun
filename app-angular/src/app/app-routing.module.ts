import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    // @ts-ignore
    { provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/web/app-angular/' : '/proxy-angular/' }
  ]
})
export class AppRoutingModule { }
