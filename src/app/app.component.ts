import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Create a property to track whether the menu is open.
	// Start with the menu collapsed so that it does not
	// appear initially when the page loads on a small screen!
	isMenuCollapsed = true;

  public navLists:any = [
    {title: "Home", url: ""},
    {title: "Calculator", url: "/calculator"},
    {title: "Design Quotes", url: "/design-quotes"},
    {title: "Users", url: "/users"},
    {title: "Albums", url: "/albums"},
    {title: "Posts", url: "/posts"}
  ];

  constructor() { }

  ngOnInit() {}


}
