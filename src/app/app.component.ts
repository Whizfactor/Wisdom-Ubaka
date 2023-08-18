import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any;
  posts: any;

  constructor(private userService: UserService, private postService: PostService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });

    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
