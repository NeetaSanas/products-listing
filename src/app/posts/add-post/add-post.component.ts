import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Post } from '../posts.model';
import { addPost } from '../state/posts.actions';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    })
  }

  onAddPost(){
    console.log(this.postForm);
    if(!this.postForm.valid){
      return;
    }

    const post: Post = {
      id:'',
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    //console.log(post);
    this.store.dispatch(addPost({post}));
  }

}
