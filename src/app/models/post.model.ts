export class Post{
  id:number;
  created_at:number;
  loveIts:number;

  constructor(public title:string,public content:string){}    
}