import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
    mobile: string = '';
    email:string='';
    message:string='';
  
    constructor() { }
  
    onSubmit() {
     
    }
}
