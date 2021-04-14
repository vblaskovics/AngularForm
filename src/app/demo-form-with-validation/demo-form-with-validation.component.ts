import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validation',
  templateUrl: './demo-form-with-validation.component.html',
  styleUrls: ['./demo-form-with-validation.component.css']
})
export class DemoFormWithValidationComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  sku2: AbstractControl;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['', Validators.required ],
      'sku2': ['', Validators.required ]
    });

    this.sku = this.myForm.controls['sku'];
    this.sku2 = this.myForm.controls['sku2'];
    
  }

  onSubmit(formValue: any) :void {
    console.log('submitted values:', formValue);
  }

  ngOnInit(): void {
  }

}
