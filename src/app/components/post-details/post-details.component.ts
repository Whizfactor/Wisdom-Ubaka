import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Comment } from '../../interface/comment';
import { Post } from '../../interface/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  posts: Post |any;
  comments: Comment[];

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}


  loadPostComments(postId: string) {
    this.postService.getCommentsByPostId(postId).subscribe(comments => {
      this.comments = comments;
    }
    );
  }

  loadPostDetails(postId: string) {
    this.postService.getPostDetails(postId).subscribe(posts => {
      this.posts = posts;
    }
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const postId = params['id'];
      this.loadPostDetails(postId);
      this.loadPostComments(postId);
    });
  }



}
