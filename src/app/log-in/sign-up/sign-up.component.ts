import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'food-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      Materialize.updateTextFields();
    });
  }

}
