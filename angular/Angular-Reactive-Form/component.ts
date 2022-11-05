// @ts-ignore
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-area',
  template: ` 
    <div class="form-wrapper">
      <form [formGroup]="form">
        <div class="form-control">
          <input type="text" name="firstname" id="firstname" 
          class="userFirstname"
          formControlName="firstname"
        >
        </div>
        <div class="form-control">
          <input type="text" name="age" id="age" 
          class="userAge" formControlName="age">
        </div>
        <div class="form-control">
          <input type="text" name="lastname" id="lastname" 
          class="userLastname" formControlName="lastname">
        </div>
        <div class="form-control">
          <input type="tel" name="twitter" id="twitter" 
          class="usertwitter" formControlName="twitter">
        </div>
      </form>
    <div>
    <pre>{{ form.value | json }}</pre>`,
  styles: [`
    form { margin-bottom: 1rem;}
    pre {
      width: 100%;
      padding: 0;
      margin: 0;
      overflow: auto;
      overflow-y: hidden;
      font-size: 12px;
      line-height: 20px;
      background: #efefef;
      border: 1px solid #777;
    }
  `]
})

export class MainAppComponent implements OnInit {
  form: FormGroup;
  person = {
    firstname: 'Coder',
    age: 25,
    lastname: 'Byte',
    twitter: '@coderbyte'
  };
  personProps = [];

  ngOnInit() {
    const formDataObj = {};
    for (const prop of Object.keys(this.person)) {
      formDataObj[prop] = new FormControl(this.person[prop]);
      this.personProps.push(prop);
    }
    this.form = new FormGroup(formDataObj);
  }
}
