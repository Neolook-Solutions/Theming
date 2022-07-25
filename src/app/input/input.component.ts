import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() type: string = ""
  @Input() text: string = ""
  @Input() labeltext: string = ""
  constructor() { }


  ngOnInit(): void {
  }

  getType() {
    switch (this.type) {
      case 'email':
        return `email`
      case 'password':
        return `password`
      default:
        return `text`
    }
  }

}






