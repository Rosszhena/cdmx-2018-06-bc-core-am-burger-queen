import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(
     public router: Router,
     private customerService: CustomerService) { }
     submitted: boolean;
     formControls = this.customerService.form.controls;

  

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    if(this.customerService.form.valid){
      this.submitted = false;
  }

}
}