import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginInterfaceComponent } from './login-interface/login-interface.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';

const routes: Routes = [{path:'' ,component:LoginInterfaceComponent},
                        {path : 'user',component:UserInterfaceComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
