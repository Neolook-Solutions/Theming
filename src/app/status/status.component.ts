import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @Input() type?: 'active' | 'inactive' | 'do_not_disturb';
  constructor() { }

  ngOnInit(): void {
  }
  getStyles() {
    switch (this.type) {
      case 'active':
        return `relative inline-flex rounded-full h-3 w-3 bg-posit-200`
      case 'inactive':
        return `relative inline-flex rounded-full h-3 w-3 bg-neutral-500`
      case 'do_not_disturb':
        return `relative inline-flex rounded-full h-3 w-3 bg-error-200`
      default:
        return `relative inline-flex rounded-full h-3 w-3 bg-posit-200`
    }
  }

  getBulbStylesAnimate() {
    switch (this.type) {
      case 'active':
        return `animate-ping absolute inline-flex h-3 w-3 rounded-full bg-posit-200 opacity-75`
      case 'inactive':
        return ``
      case 'do_not_disturb':
        return `animate-ping absolute inline-flex h-3 w-3 rounded-full bg-error-200 opacity-75`
      default:
        return `animate-ping absolute inline-flex h-3 w-3 rounded-full bg-posit-200 opacity-75`
    }
  }

  getTextStyles() {
    switch (this.type) {
      case 'active':
        return `text-posit-400`
      case 'inactive':
        return `text-neutral-500`
      case 'do_not_disturb':
        return `text-error-500`
      default:
        return `text-posit-400`
    }
  }

  getText() {
    switch (this.type) {
      case 'active':
        return `Active`
      case 'inactive':
        return `Inactive`
      case 'do_not_disturb':
        return `Do not disturb`
      default:
        return `Active`
    }
  }

}
