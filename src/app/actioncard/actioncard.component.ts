import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actioncard',
  templateUrl: './actioncard.component.html',
  styleUrls: ['./actioncard.component.css']
})
export class ActioncardComponent implements OnInit {

  @Input() type?: 'active' | 'inactive' | 'do_not_disturb';




  constructor() { }

  ngOnInit(): void {
  }





}
