import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import * as fromRoot from '../store/reducers';
import {State} from '@ngrx/store';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private state: State<fromRoot.State>,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.state.getValue().auth.loggedInUser) {
      this.router.navigate(['/login']);
    }
    return !!this.state.getValue().auth.loggedInUser;
  }

}

