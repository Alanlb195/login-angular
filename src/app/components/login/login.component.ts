import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ErrorFireService } from '../../services/error-fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError : ErrorFireService
  ) { 
    this.loginUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
  })
  }

  ngOnInit(): void {
  }

  login(){
    const email = this.loginUser.value.email;
    const password = this.loginUser.value.password;

    this.loading = true;
    this.afAuth.signInWithEmailAndPassword(email,password).then((user) => {
      if(user.user?.emailVerified){
        this.router.navigate(['/dash']);
      }else{
        this.router.navigate(['/verificar']);
      }
    }).catch((error) =>{
      this.loading = false;
      this.toastr.error(this.firebaseError.errorFire(error.code),'Error')
    })
  }

}
