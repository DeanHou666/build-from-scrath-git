import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post:Post;

  constructor(
    private route:ActivatedRoute,
    private postService:PostService,
    private location: Location
  ) { }

  ngOnInit() {
    const id=+this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.postService.getPosts(id).subscribe( post =>
      this.post=post
  )
    console.log(this.post)
  }

}
