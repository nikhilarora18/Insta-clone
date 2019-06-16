import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../models/post.model';
import {State, Store} from '@ngrx/store';
import * as fromRoot from '../../../../store/reducers';
import * as postActions from '../../../../store/actions/post.actions';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  isPostAuthorLoggedIn = false;

  constructor(private store: Store<fromRoot.State>,
              private state: State<fromRoot.State>) {
  }

  ngOnInit() {
    this.isPostAuthorLoggedIn = this.post.user.username === this.state.getValue().auth.loggedInUser.username;
  }

  delete() {
    this.store.dispatch(new postActions.DeletePost(this.post));
    this.store.subscribe(() => {
      localStorage.setItem('state', JSON.stringify(this.state.getValue()));
    });
  }
}
