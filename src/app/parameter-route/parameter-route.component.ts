import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersericesService } from '../userserices.service';

@Component({
  selector: 'app-parameter-route',
  templateUrl: './parameter-route.component.html',
  styleUrls: ['./parameter-route.component.css']
})
export class ParameterRouteComponent {
constructor(private p:UsersericesService){}

product :any
ngOnInit(){

  this.product=this.p.product_info
}


}
