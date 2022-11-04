import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorFireService {
  constructor() {}

  errorFire(code: string) {
    // login users

    // registro users
    switch (code) {
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';

      case 'auth/weak-password':
        return 'La contraseña es muy debil';

      case 'auth/invalid-email':
        return 'Correo invalido';

      case 'auth/internal-error':
        return 'Correo no completado';

      case 'auth/wrong-password':
        return 'Contraseña incorrecta';

      case 'auth/user-not-found':
        return 'Correo incorrecto';

      default:
        return 'error desconocido';
    }
  }
}
