import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
  ) { }

  public navCards:any = [
    {title: "All Users", url: "/users"},
    {title: "All Albums", url: "/albums"},
    {title: "All Posts", url: "/posts"}
  ];

  ngOnInit() {
  }
}
