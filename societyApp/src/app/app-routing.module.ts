import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{PageNotFoundComponent} from './page-not-found/page-not-found.component'
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AboutUsComponent } from './about-us/about-us.component';
const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'manage-users',component:ManageUsersComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
