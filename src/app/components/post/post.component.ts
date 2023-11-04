import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interface/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  posts: Post[];

  constructor(private postService: PostService,) { }

  ongetAllPosts(): void {
    this.postService.getAllPosts().subscribe(
      posts => this.posts = posts
    )
  }

  ngOnInit() {
    this.ongetAllPosts()
  }

}