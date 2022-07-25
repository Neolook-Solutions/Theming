import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() type: string = ""
  @Input() text: string = ""
  constructor() { }

  ngOnInit(): void {
  }
  getStyles() {
    switch (this.type) {
      case 'soft':
        return `bg-brand-300 hover:bg-brand-350 text-neutral-500 font-medium text-base py-3 px-4 rounded-lg`
      case 'outline':
        return `bg-transparent hover:bg-brand-200 text-brand-500 border-2 border-brand-500 font-medium text-base py-3 px-4 rounded-lg`
      case 'disabled':
        return `bg-neutral-200 text-neutral-400 font-medium text-base py-3 px-4 rounded-lg`
      default:
        return `bg-brand-500 hover:bg-brand-600 text-white font-medium text-base py-3 px-4 rounded-lg`
    }
  }

}
