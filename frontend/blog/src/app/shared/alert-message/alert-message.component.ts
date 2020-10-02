import { ErrorModel } from './../../models/error.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {

  @Input() public error: ErrorModel;

  constructor() { }

  ngOnInit() {
  }

}
