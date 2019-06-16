import {Action} from '@ngrx/store';
import {Post} from '../../models/post.model';

export enum PostActionTypes {
  CreatePost = '[Post] CreatePost',
}

export class CreatePost implements Action {
  readonly type = PostActionTypes.CreatePost;

  constructor(public payload: Post) {
  }
}


export type PostActions = CreatePost;
