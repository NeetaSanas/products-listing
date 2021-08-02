import { Post } from "../posts.model";

export interface PostsState{
    posts: Post[];
}

export const initialState = {
    posts : [
        {id : '1', title:'title1', description:'description1'},
        {id : '2', title:'title2', description:'description2'}
    ]
}