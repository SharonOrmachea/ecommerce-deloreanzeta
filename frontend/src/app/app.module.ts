import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { AdminModule } from './Admin/admin.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';

import { AdminInterceptor } from './shared/interceptors/admin-interceptors';
import { LoadingInterceptor } from './shared/interceptors/loadingInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    PublicModule,
    PrivateModule,
    AdminModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut:10000,
      positionClass:'toast-bottom-right',
      newestOnTop:false,
      maxOpened: 1,
      progressBar: true,
      progressAnimation: 'decreasing',
      preventDuplicates: true,
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AdminInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
