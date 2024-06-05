import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  frm: FormGroup;

  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      name: ["",[
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ]],
      username: ["",[
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ]],
      email: ["",[
        Validators.required,
        Validators.maxLength(50),
        Validators.email
      ]],
      password: ["",[
        Validators.required
      ]],
      confirmPassword: ["",[
        Validators.required
      ]]
    });
  }

  get component(){
    return this.frm.controls;
  }

  submitted: boolean = false
  onSubmit(data: User){
    this.submitted = true;

    var c = this.component;
    debugger;
  }
}
