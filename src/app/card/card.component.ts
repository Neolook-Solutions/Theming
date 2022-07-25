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
  constructor() { }

  ngOnInit(): void {
  }

  getIcon() {
    switch (this.iconName) {
      case 'check': {
        return <path stroke - linecap="round" stroke - linejoin="round" d = "M5 13l4 4L19 7" />
            }   
      case 'outline':
        return `bg-transparent hover:bg-brand-200 text-brand-500 border-2 border-brand-500 font-medium text-base py-3 px-4 rounded-lg`
      case 'disabled':
        return `bg-neutral-200 text-neutral-400 font-medium text-base py-3 px-4 rounded-lg`
      default:
        return `bg-brand-500 hover:bg-brand-600 text-white font-medium text-base py-3 px-4 rounded-lg`
    }

  }





