import { Component } from '@angular/core';
import{OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(){
  }
  
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyDb33Bxz8J_F15yv7n7sLSwvkrAZGyPqPw",
      authDomain: "myblog-b476d.firebaseapp.com",
      databaseURL: "https://myblog-b476d.firebaseio.com",
      projectId: "myblog-b476d",
      storageBucket: "myblog-b476d.appspot.com",
      messagingSenderId: "88982284249",
      appId: "1:88982284249:web:08df0c9ec447b5cf"
    };
    firebase.initializeApp(firebaseConfig); 
  }

}