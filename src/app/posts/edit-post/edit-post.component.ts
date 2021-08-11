import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Post } from '../posts.model';
import { updatePost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {
  post:Post;
  postForm: FormGroup;
  postSubscription : Subscription;
  constructor(private route:ActivatedRoute, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
      const id = params.get('id');
      this.store.select(getPostById,{id}).subscribe((data) => {
        this.post = data;
        this.createForm();
      })
    })
  }

  createForm(){
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, Validators.required),
      description: new FormControl(this.post.description, Validators.required)
    });
  }

  ngOnDestroy(){
    if(this.postSubscription){
      this.postSubscription.unsubscribe();
    }
  }

  onUpdatePost(){
    if(!this.postForm.valid){
      return;
    }

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    const post: Post = {
      id:this.post.id,
      title,
      description
    }

    this.store.dispatch(updatePost({ post }));
  }
}
