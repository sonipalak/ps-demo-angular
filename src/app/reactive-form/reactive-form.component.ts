import { Component } from '@angular/core';
import {FormControl, FormControlName, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  title= "Reactive Form"

  loginForm= new FormGroup({
    name: new FormControl(),
    email: new FormControl()
  })

  loginUser(){
    console.warn(this.loginForm.value)
  }
}
