import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration';
import { SuccessComponent} from './success/success';

export const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'success', component: SuccessComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
