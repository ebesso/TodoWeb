import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoldersComponent} from './components/folders/folders.component';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import { AuthGuardServiceService } from './services/auth-guard-service.service';


const routes: Routes = [
  {path: "folders", component: FoldersComponent, canActivate: [AuthGuardServiceService]},
  {path: "authentication", component: AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
