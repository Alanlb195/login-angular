import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';
import { ErrorFireService } from '../../services/error-fire.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUser: FormGroup;
  /*llamar spinner*/
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseEror: ErrorFireService
  ) {
    this.registerUser = this.fb.group({
      // name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirpassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  registrar() {
    const name = this.registerUser.value.name;
    const email = this.registerUser.value.email;
    const password = this.registerUser.value.password;
    const repetirpassword = this.registerUser.value.repetirpassword;

    if (password !== repetirpassword) {
      this.toastr.error('Las contraseñas no son iguales', 'Error');
      return;
    }
    this.loading = true;
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // this.loading = false;
        this.verificarCoreo();
      })
      .catch((error) => {
        this.loading = false;
        console.log(error);
        this.toastr.error(this.firebaseEror.errorFire(error.code), 'Error');
      });
  }

  verificarCoreo() {
    this.afAuth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
        this.toastr.success(
          'Usuario registrado con exito',
          'Usuario Registrado 😍'
        );
        this.toastr.info(
          'Te enviamos un correo para verificar tu correo electronico',
          'Verificar Correo 😍'
        );
        this.router.navigate(['/login']);
      });
  }
}
