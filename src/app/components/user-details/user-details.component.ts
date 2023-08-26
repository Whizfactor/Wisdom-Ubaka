import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TodoService } from '../../services/todo.service';
import { AlbumService } from '../../services/album.service';
import { PostService } from '../../services/post.service';
import { User } from '../../interface/user';
import { Post } from '../../interface/post';
import { Album } from '../../interface/album';
import { Todo } from '../../interface/todo';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: number;
  user: User;
  todos: Todo[];
  posts: Post[];
  albums: Album[];

  constructor(
    private userService: UserService,
    private postService: PostService,
    private albumService: AlbumService,
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.loadUserDetails();
  }

  loadUserDetails() {
    this.userService.getUserById(this.userId).subscribe(user => {
      this.user = user;
    });

    this.todoService.getUserTodos(this.userId).subscribe(todos => {
      this.todos = todos;
    });

    this.postService.getUserPosts(this.userId).subscribe(posts => {
      this.posts = posts;
    });

    this.albumService. getUserAlbums(this.userId).subscribe(albums => {
      this.albums = albums;
    });
  };
}
