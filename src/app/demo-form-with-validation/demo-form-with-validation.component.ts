import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {
      invalidSku: true,
    };
  }
}

@Component({
  selector: 'app-demo-form-with-validation',
  templateUrl: './demo-form-with-validation.component.html',
  styleUrls: ['./demo-form-with-validation.component.css'],
})
export class DemoFormWithValidationComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  // sku2: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.compose([Validators.required, skuValidator])],
      sku2: ['', Validators.required],
      sku3: [''],
    });

    this.sku = this.myForm.controls['sku'];
    // this.sku2 = this.myForm.controls['sku2'];

    this.sku.valueChanges.subscribe((value:string) => {
      console.log('sku changed:', value);
    });

    this.myForm.valueChanges.subscribe((formValue: any) => {
      console.log('form changed:', formValue)
    })
  }

  onSubmit(formValue: any): void {
    console.log('submitted values:', formValue);
  }

  ngOnInit(): void {}
}
