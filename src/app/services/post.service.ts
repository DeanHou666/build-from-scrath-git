import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl:string='https://jsonplaceholder.typicode.com/posts'
  // post:Post;
  constructor(private http:HttpClient) { }
  getPost():Observable<Post[]>{
    return this.http.get<Post[]>(this.postUrl)
  }
  savePost(post:Post):Observable<Post>{
    return this.http.post<Post>(this.postUrl,post,httpOptions)
  }
}
