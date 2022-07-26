import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements OnInit {

  @Input() firstEntry: string = ""
  @Input() secondEntry: string = ""
  constructor() { }

  ngOnInit(): void {
  }
  

}
