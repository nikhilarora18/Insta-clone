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
    case postActions.PostActionTypes.DeletePost:
      return handleDeletePost(state, action);
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

function handleDeletePost(state: State, action: postActions.DeletePost): State {
  const removePostIndex = state.posts.map((post) => {
    return post;
  }).indexOf(action.payload);
  const posts = state.posts;
  posts.splice(removePostIndex, 1);
  console.log(posts);
  return {
    ...state,
    posts
  };
}
