import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string = ""
  @Input() amount: string = ""
  @Input() iconName: string = ""
  @Input() color?: 'right-now' | 'sum';
  constructor() { }

  ngOnInit(): void {
  }
  getColour() {
    switch (this.color) {
      case 'sum':
        return `text-neutral-500`;
      case 'right-now':
      default:
        return `text-posit-400`
    }
  }

  getIconColour() {
    switch (this.color) {
      case 'sum':
        return `text-neutral-400`;
      case 'right-now':
      default:
        return `text-posit-300`
    }
  }
}










