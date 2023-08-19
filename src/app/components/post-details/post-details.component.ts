import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Comment } from '../../interface/comment';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId: number;
  comments: Comment[];

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.loadPostDetails();
    });
  }

  loadPostDetails() {
    this.postService.getCommentsByPostId(this.postId).subscribe(comments => {
      this.comments = comments;
    });
  }
}
