import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() type?: 'soft' | 'outline' | 'disabled';
  @Input() text: string = ""
  @Input() iconNameBefore: string = ""
  @Input() iconNameAfter: string = ""
  @Input() extraClass?: string = ""
  constructor() { }

  ngOnInit(): void {
  }
  getStyles() {
    switch (this.type) {
      case 'soft':
        return `bg-brand-300 hover:bg-brand-350 text-neutral-500 border-brand-300 flex w-full md:w-fit ${this.extraClass}`
      case 'outline':
        return `bg-transparent hover:bg-brand-200 text-brand-500 border-brand-500 flex w-full md:w-fit ${this.extraClass}`
      case 'disabled':
        return `bg-neutral-200 text-neutral-300 border-neutral-200 flex w-full md:w-fit ${this.extraClass}`
      default:
        return `bg-brand-500 hover:bg-brand-600 text-white border-brand-500 flex w-full md:w-fit ${this.extraClass}`
    }
  }

}
