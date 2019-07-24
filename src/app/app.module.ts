import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {PostService} from './services/post.service';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import {HeaderComponent} from './header/header.component';
import {NewPostComponent} from './post-list-component/new-post/new-post.component';

const appRoutes:Routes=[
  {path:'posts', component:PostListComponentComponent},
  {path:'new',component:NewPostComponent},
  {path:'',redirectTo:'posts',pathMatch:'full'},
  {path:'**',redirectTo:'posts'}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,PostListComponentComponent,HeaderComponent,NewPostComponent],
  bootstrap:[ AppComponent],
  providers:[PostService]
})
export class AppModule { }
