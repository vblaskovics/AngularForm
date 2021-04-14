import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {

  constructor() { }

  onSubmit(form: any) :void {
    console.log('submitted values:', form.value);
  }

  ngOnInit(): void {
  }

}
