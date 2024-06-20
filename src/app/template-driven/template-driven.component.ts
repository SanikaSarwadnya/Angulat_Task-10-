import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  title = 'AngularForms';
  form={
    username:'',
    Email:'',
    password:''
      }
  onSubmit()
  {
    console.log(this.form)
  }
}


