import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, AbstractControl } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formValues = {
    email: '',
    password: ''
  }

  // control: any

  handelLoginForm(form: any){
    console.log(form)
    console.log(form.value)


    Object.values(form.controls).forEach((control:any) => {
      control.markAsTouched();
    })
  }

}
