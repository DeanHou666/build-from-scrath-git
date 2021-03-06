import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../../models/post'
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  showForm:boolean=true;
  @Output() newPost:EventEmitter<Post>= new EventEmitter()
  @Input() isEdit;
  @Input() currentPost;
  @Output() updatedPost:EventEmitter<Post> = new EventEmitter()
  constructor(private postService:PostService) { }

  ngOnInit() {
  }
  addPost(title,body){
    this.postService.savePost({title,body} as Post).subscribe(post =>{
      this.newPost.emit(post)
    })
  }
  updatePost(){
    this.postService.updatePost(this.currentPost).subscribe(
      post=>{
        this.updatedPost.emit(post);
      }
    )
  }

}
