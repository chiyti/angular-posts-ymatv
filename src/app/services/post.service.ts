import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Post} from '../models/post.model';
import * as firebase from 'firebase';

@Injectable()

export class PostService{
  constructor(){
    this.getPosts();
  }
  posts:Post[]=[];
  postSubject=new Subject<Post[]>();

  getPosts(){
    firebase.database().ref('/posts').on('value',(data)=>{
        this.posts=data.val()? data.val():[];
        this.emitPostSubject();
      }
    )
  }
  savePost(){
    firebase.database().ref('/posts').set(this.posts);
  }
  
  emitPostSubject(){
    this.postSubject.next(this.posts.slice());
  }

  loveIt(i:number){
    this.posts[i].loveIts+=1;
    this.emitPostSubject();
  }

  dontloveIt(i:number){
    this.posts[i].loveIts-=1;
    this.emitPostSubject();  
  }

  getPostById(id: number) {
      const post = this.posts.find(
        (item) => {
          return item.id === id;
        }
      );
      return post;
  } 

  addPost(post:Post){
    const postObject={
      id:0,
      title:'',
      content:'',
      loveIts:0,
      created_at:0
    }
    postObject.title=post.title;
    postObject.content=post.content;
    postObject.created_at=Date.now();
    if(this.posts.length>=1){
      postObject.id=this.posts[(this.posts.length-1)].id+1;
    }else{
      postObject.id=0;
    }
    this.posts.push(postObject);
    this.savePost();
    this.emitPostSubject();
  }
  
  removePost(post:Post){
    const postIndexToRemove=this.posts.findIndex((item)=>{
      if(item===post){
        return true;
      }
    })
    this.posts.splice(postIndexToRemove,1);
    this.savePost();
    this.emitPostSubject();
  }

}