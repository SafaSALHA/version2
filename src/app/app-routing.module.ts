import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProudctsComponent } from './proudcts/proudcts.component';
import { HomeComponent } from './home/home.component';
import { HelmentsComponent } from './helments/helments.component';
import { EarphoneComponent } from './earphone/earphone.component';
import { CasesAndCoversComponent } from './cases-and-covers/cases-and-covers.component';
import { PowerBankComponent } from './Power_bank/Power_bank.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProudctsComponent },
  { path: 'helmets', component: HelmentsComponent },
  { path: 'earphones', component: EarphoneComponent },
  { path: 'Cases_and_covers', component: CasesAndCoversComponent },
  { path: 'Power_bank', component:PowerBankComponent },
  { path: 'register', component:RegisterComponent},
  { path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
