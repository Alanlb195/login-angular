import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ErrorFireService } from '../../services/error-fire/error-fire.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {

  recuperarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError : ErrorFireService
  ) { 
    this.recuperarUsuario = this.fb.group({
      email: ['',[Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  recuperar(){
    const email = this.recuperarUsuario.value.email;
    this.afAuth.sendPasswordResetEmail(email).then(() => {

      this.toastr.info('Correo enviado con exito','Recuperar  🧠😍')
      this.router.navigate(["/login"])
      this.loading = true;
    }).catch((error) =>{
      this.loading = true;
      this.toastr.error(this.firebaseError.errorFire(error.code),'Error')
    })
  }

}
