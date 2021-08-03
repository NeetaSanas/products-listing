import { Post } from "../posts.model";

export interface PostsState{
    posts: Post[];
}

export const initialState = {
    posts : [
        {id : '1', title:'title1', description:'description1'},
        {id : '2', title:'title2', description:'description2'},
        {id : '3', title:'title3', description:'description3'},
        {id : '4', title:'title4', description:'description4'},
        // {id : '5', title:'title5', description:'description5'},

    ]
}