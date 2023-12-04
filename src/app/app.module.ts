import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProudctsComponent } from './proudcts/proudcts.component';
import { HelmentsComponent } from './helments/helments.component';
import { FormsModule } from '@angular/forms';
import { EarphoneComponent } from './earphone/earphone.component';
import { CasesAndCoversComponent } from './cases-and-covers/cases-and-covers.component';
import { PowerBankComponent } from './Power_bank/Power_bank.component';
import { FoterComponent } from './foter/foter.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProudctsComponent,
    HelmentsComponent,
    EarphoneComponent,
    CasesAndCoversComponent,
    PowerBankComponent,
    FoterComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
