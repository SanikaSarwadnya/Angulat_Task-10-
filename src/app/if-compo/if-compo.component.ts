import { Component } from '@angular/core';

@Component({
  selector: 'app-if-compo',
  templateUrl: './if-compo.component.html',
  styleUrls: ['./if-compo.component.css']
})
export class IfCompoComponent {
  showMessage = false;

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }
}
