import { Component, OnInit } from '@angular/core';
import { UsersService, PostsService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any;
  posts: any;

  constructor(private usersService: UsersService, private postsService: PostsService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
