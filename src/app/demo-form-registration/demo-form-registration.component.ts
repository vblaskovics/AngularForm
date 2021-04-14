import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

function emailValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/(.+)@(.+){2,}\.(.+){2,}/)) {
    return { invalidEmail: true };
  }
}

function passwordValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/\d/)) {
    return { invalidPassword: true };
  }
}

@Component({
  selector: 'app-demo-form-registration',
  templateUrl: './demo-form-registration.component.html',
  styleUrls: ['./demo-form-registration.component.css'],
})
export class DemoFormRegistrationComponent implements OnInit {
  myForm: FormGroup;
  passwordError: boolean;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, emailValidator])],
      password: ['', Validators.compose([Validators.required, passwordValidator])],
      passwordre: ['', Validators.compose([Validators.required, passwordValidator])],
    });

    this.myForm.valueChanges.subscribe((formValue) => {
      this.passwordError = formValue.password !== formValue.passwordre;
    })
  }

  onSubmit(formValue: any): void {
    console.log('submitted values:', formValue);
  }

  ngOnInit(): void {}
}
