import {ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as fromAuth from './auth.reducer';
import * as fromPost from './post.reducer';

export interface State {
  auth: fromAuth.State;
  post: fromPost.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  post: fromPost.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getUsersList = createSelector(selectAuthState, fromAuth.getUsersList);

export const selectPostState = createFeatureSelector<fromPost.State>('post');
export const getPosts = createSelector(selectPostState, fromPost.getPosts);
