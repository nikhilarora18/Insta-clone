import {Component, OnInit} from '@angular/core';
import {Post} from '../../../../models/post.model';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../../store/reducers';
import {getPosts} from '../../../../store/reducers';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  posts: Post[];

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.store.select(getPosts).subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

}
