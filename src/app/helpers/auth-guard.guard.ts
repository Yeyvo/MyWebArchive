import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "@auth0/auth0-angular";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    // let isAuth = false;
    //
    // this.authenticationService.isAuthenticated$.subscribe((res)=>{
    //   isAuth = res;
    // })
    // if (isAuth) {
    //
    //   // if (route.data['roles'] && route.data['roles'].indexOf(user.role) === -1) {
    //   //   this.router.navigate(['/'], {queryParams: {returnUrl: state.url}})
    //   //   return false;
    //   // }
    //   return true;
    // }
    // this.router.navigate(['/'], {queryParams: {returnUrl: state.url}})
    // return false;

    // console.log('user --> : ', user , '    role  --> :', route.data['roles'] , ' condition --> : ', route.data['roles'].indexOf(user.role))


    return true;
  }

}
