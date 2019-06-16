import {Post} from '../../models/post.model';
import * as postActions from '../actions/post.actions';

export const getPosts = (state: State) => state.posts;


export interface State {
  posts?: Post[];
}

export const initialState: State = {
  posts: JSON.parse(localStorage.getItem('state')) ?
    JSON.parse(localStorage.getItem('state')).post.posts :
    []
};

export function reducer(state = initialState, action: postActions.PostActions): State {
  switch (action.type) {
    case postActions.PostActionTypes.CreatePost:
      return handleCreatePost(state, action);
    default:
      return state;
  }
}

function handleCreatePost(state: State, action: postActions.CreatePost): State {
  return {
    ...state,
    posts: [...state.posts, action.payload]
  };
}
