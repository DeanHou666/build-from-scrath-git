import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl:string='https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) { }
  getPost():Observable<Post[]>{
    return this.http.get<Post[]>(this.postUrl)
  }
}
