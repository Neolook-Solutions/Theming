import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  @Input() text: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
