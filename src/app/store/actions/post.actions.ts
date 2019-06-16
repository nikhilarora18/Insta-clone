import {Action} from '@ngrx/store';
import {Post} from '../../models/post.model';

export enum PostActionTypes {
  CreatePost = '[Post] CreatePost',
  DeletePost = '[Post] DeletePost'
}

export class CreatePost implements Action {
  readonly type = PostActionTypes.CreatePost;

  constructor(public payload: Post) {
  }
}

export class DeletePost implements Action {
  readonly type = PostActionTypes.DeletePost;

  constructor(public payload: Post) {
  }
}


export type PostActions = CreatePost | DeletePost;
