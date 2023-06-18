import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TabeldataComponent } from './tabeldata/tabeldata.component';
import { UserCardComponent } from './user-card/user-card.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'demo', component:DemoPageComponent},
  {path:'login', component:LoginComponent},
  {path:'reactive',component:ReactiveFormComponent},
  {path:'driven',component:TemplateDrivenFormComponent},
  {path:'search', component:SearchbarComponent},
  {path:'table', component:TabeldataComponent},
  {path:'usercard', component: UserCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
