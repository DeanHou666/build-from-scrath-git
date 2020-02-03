import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[];
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPost().subscribe(posts =>{
      this.posts=posts
    })
  }
  onNewPost(post:Post){
    this.posts.unshift(post)
  }

}
