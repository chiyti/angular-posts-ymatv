import { Component, OnInit} from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../models/post.model';
import {PostService} from '../../services/post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: [ './new-post.component.scss' ]
})
export class NewPostComponent implements OnInit  {

  postForm:FormGroup;

  constructor(private fb:FormBuilder,private postService:PostService,private router: Router) { }

  ngOnInit(){
    this.initform();
  }

  initform(){
    this.postForm=this.fb.group({
      titre:['',Validators.required],
      contenu:['',Validators.required]
    })
  }

  onSavePost(){
    const title = this.postForm.get('titre').value;
    const content = this.postForm.get('contenu').value;
    const newPost=new Post(title,content);
    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  } 
}