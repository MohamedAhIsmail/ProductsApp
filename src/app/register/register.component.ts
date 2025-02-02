import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  // cPass: boolean = false;

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      userName: new FormControl('', [Validators.required, Validators.pattern('^[^\\s]*$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$')]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, { validators: this.passwordMatchValidator })

  }

  get formControls() {
    return this.registerForm.controls;
  }



  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) return null;

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmPassword.setErrors(null);
      return null;
    }
  }


  handelSubmitForm(){
    Object.values(this.registerForm.controls).forEach((control:any) => {
      control.markAsTouched();
    })
  }


//   passwordsMatchValidator(form: AbstractControl): { mismatch: boolean } | null {
//     const password = form.get('password')?.value;
//     const confirmPassword = form.get('confirmPassword')?.value;

//     if (password && confirmPassword && password !== confirmPassword) {
//       return { mismatch: true }; // Return error if passwords do not match
//     }
//     return null; // No error if passwords match
//   }


  // passwordMatchValidator(form: FormGroup) {
  //   const password = form.get('password');
  //   const confirmPassword = form.get('confirmPassword');
  //   if (password && confirmPassword && password.value !== confirmPassword.value) {
  //     return { match: true };
  //   }
  //   return null;
  // }

}
