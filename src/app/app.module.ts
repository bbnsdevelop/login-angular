import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ModalLoginChangePassComponent } from './modal-login-change-pass/modal-login-change-pass.component';
import { ModalLoginFormPassComponent } from './modal-login-form-pass/modal-login-form-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalLoginComponent,
    ModalLoginChangePassComponent,
    ModalLoginFormPassComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
