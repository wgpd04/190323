import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title = "歡迎來到 Todo App";

  constructor() { }

  ngOnInit() {
  }
  
  getDate() {
    return new Date();
  }

}
