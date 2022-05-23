import { Injectable } from '@angular/core';

// @Injectable makes this component available for dependency injection
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string){
    // console.log('before' + this.isUserLoggedIn());

    if(username === "Sean Merz" && password ==="dummy"){
      sessionStorage.setItem('authenticatedUser', username);
      //console.log('after' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
