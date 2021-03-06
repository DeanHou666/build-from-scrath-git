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
  isEdit:boolean=false;
  currentPost:Post={
    id:0,
    title:'',
    body:''
  }
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPost().subscribe(posts =>{
      this.posts=posts
    })
  }
  onNewPost(post:Post){
    this.posts.unshift(post)
  }
  editPost(post:Post){
    this.currentPost=post;
    this.isEdit=true;
  }
  onUpdatedPost(post:Post){
    this.posts.forEach((cur,index)=>{
      if(post.id === cur.id){
        this.posts.splice(index,1)
        this.posts.unshift(post);
        this.isEdit=false;
        this.currentPost={
          id:0,
          title:'',
          body:''
        }
      }
    })
  }

  deletePost(post:Post){
    this.postService.removePost(post).subscribe(()=>{
      this.posts.forEach((cur,index)=>{
        if(post.id === cur.id){
          this.posts.splice(index,1);
        }
      })
    })
  }

}
