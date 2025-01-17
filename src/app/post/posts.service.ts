import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

import { Post } from "./post.model";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

const BACKEND_URL = environment.apiUrl + "/posts/";

@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<{ posts: Post[]; postCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getHeaderWithToken() {
    let token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ` + token
    });
  }

  getPosts(postsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; posts: any; maxPosts: number }>(
        BACKEND_URL + queryParams
      )
      .pipe(
        map(postData => {
          return {
            posts: postData.posts.map( (post: { title: any; content: any; _id: any; imagePath: any; creator: any }) => {
              return {
                title: post.title,
                content: post.content,
                id: post._id,
                imagePath: post.imagePath,
                creator: post.creator
              };
            }),
            maxPosts: postData.maxPosts
          };
        })
      )
      .subscribe(transformedPostData => {
        this.posts = transformedPostData.posts;
        this.postsUpdated.next({
          posts: [...this.posts],
          postCount: transformedPostData.maxPosts
        });
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{
      _id: string;
      title: string;
      content: string;
      imagePath: string;
      creator: string;
    }>(BACKEND_URL + id);
  }

  addPost(title: string, content: string, image: File) {
    const postData = new FormData();
    postData.append("title", title);
    postData.append("content", content);
    postData.append("image", image, title);

    const headers = this.getHeaderWithToken()

    this.http
      .post<{ message: string; post: Post }>(
        BACKEND_URL,
        postData,
        { headers }
      )
      .subscribe({
        next: (responseData) => {
          this.router.navigate(["/"]);
        },
        error: (error) => {
          console.error("Error:", error);
        }
      });
  }

  updatePost(id: string, title: string, content: string, image: File | string) {
    const headers = this.getHeaderWithToken()
    let postData: Post | FormData;
    if (typeof image === "object") {
      postData = new FormData();
      postData.append("id", id);
      postData.append("title", title);
      postData.append("content", content);
      postData.append("image", image, title);
    } else {
      postData = {
        id: id,
        title: title,
        content: content,
        imagePath: image,
        creator: ""
      };
    }
    this.http
      .put(BACKEND_URL + id, postData, { headers })
      .subscribe({
        next: (responseData) => {
          this.router.navigate(["/"]);
        },
        error: (error) => {
          console.error("Error:", error);
        }
      });
  }

  deletePost(postId: string) {
    const headers = this.getHeaderWithToken()
    return this.http.delete(BACKEND_URL + postId, { headers });
  }
}
