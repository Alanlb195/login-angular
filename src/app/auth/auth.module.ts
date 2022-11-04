import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

// Componentes de Auth
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterverificarCorreoComponent } from './pages/registerverificar-correo/registerverificar-correo.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { SpinnerComponent } from './pages/spinner/spinner.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    RecuperarPasswordComponent,
    RegisterComponent,
    RegisterverificarCorreoComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    ToastrModule
  ]
})
export class AuthModule { }
