import { Component } from '@angular/core';


@Component({
  selector: 'app-booknow',
  standalone: false,
  
  templateUrl: './booknow.component.html',
  styleUrl: './booknow.component.css'
})
export class BooknowComponent {
  name: string = '';
  mobile: string = '';

  constructor() { }

  onSubmit() {
    
  }
}
