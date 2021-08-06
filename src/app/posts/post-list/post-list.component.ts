import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Post } from '../posts.model';
import { deletePost } from '../state/posts.actions';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;
  products:any;
  NoProducts: boolean=false;
  constructor(private store : Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
    this.products = this.posts;
  }

  deletePost(id:any){
    if(confirm("Are you sure you want to delete?")){
      this.store.dispatch(deletePost({id}));
      this.router.navigate(['/posts']);
    }

    if(!this.products){
      this.NoProducts = true;
    }
  }

  viewProduct(){

  }

}
