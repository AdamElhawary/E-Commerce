import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ConfirmedValidator } from './ConfirmedValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.regForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      userName: ['', [Validators.required, Validators.pattern('^\\S*$')]],
      addresses: this.fb.array([]),
        password:   ['',
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
          ),
        ],
        confirmPassword: ['', Validators.required]
      }, { 
        validator: ConfirmedValidator('password', 'confirmPassword')
      })
  }

  get regFormControls() {
    return this.regForm.controls;
  }

  get addressesList(): FormArray {
    return this.regForm.get('addresses') as FormArray;
  }
  newAddress(): FormGroup {
    return this.fb.group({
      address: '',
      city: '',
      street: '',
      country: '',
    });
  }
  addAddress() {
    this.addressesList.push(this.newAddress());
  }
  submitReactiveForm() {
    console.log(this.regForm.value);
  }
}

