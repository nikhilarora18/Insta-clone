import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {State, Store} from '@ngrx/store';
import * as fromRoot from '../../../../store/reducers';
import * as postActions from '../../../../store/actions/post.actions';
import {Post} from '../../../../models/post.model';


@Component({
  selector: 'app-create-post-dialog',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post-dialog.component.scss']
})
export class CreatePostDialogComponent {

  controls = {
    imageUrl: new FormControl(null, Validators.required),
    location: new FormControl(null),
    caption: new FormControl(null),
    commentingOn: new FormControl(true)
  };

  postCreateFormGroup = new FormGroup(this.controls);

  constructor(private dialogRef: MatDialogRef<CreatePostDialogComponent>,
              private store: Store<fromRoot.State>,
              private state: State<fromRoot.State>) {
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    console.log(this.state.getValue().auth.loggedInUser);
    const post: Post = {
      user: this.state.getValue().auth.loggedInUser,
      location: this.controls.location.value,
      numberOfLikes: 0,
      numberOfComments: 0,
      comments: [],
      commentingOn: this.controls.commentingOn.value,
      isArchived: false,
      imageUrl: this.controls.imageUrl.value,
      caption: this.controls.caption.value,
    };
    this.store.dispatch(new postActions.CreatePost(post));
    this.store.subscribe(() => {
      localStorage.setItem('state', JSON.stringify(this.state.getValue()));
    });
    this.dialogRef.close();
  }
}
