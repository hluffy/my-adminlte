import { Component, OnInit, TemplateRef } from '@angular/core';


import * as $ from 'jquery'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {


  constructor() { }

  showView() {
    $("#mybutton").click()
  }


  ngOnInit() {
  }

  

}
