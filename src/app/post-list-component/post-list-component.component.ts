import { Component,Input, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {Post} from '../models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  posts:Post[];
  postSubscription:Subscription; 
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postSubscription=this.postService.postSubject
      .subscribe((posts:Post[])=>{
        this.posts=posts;
    });
    this.postService.emitPostSubject();
  }

  onLoveIt(id:number){
    this.postService.loveIt(id);
  }

  onDontLoveIt(id:number){
    this.postService.dontloveIt(id);
  }

  onSupprimer(post:Post){
    this.postService.removePost(post);
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}