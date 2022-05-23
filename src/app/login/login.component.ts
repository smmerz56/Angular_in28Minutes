import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Sean Merz'
  password = 'dummy'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  //Old way to add router Angular.giveMeRouter
  //New way Dependency Injection. Dependency Injection in Angular is a built in feature.  
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) {

    //Anything passed to the constructor in typescript, is available
    //  as a member variable. Dont need this.router = router
    //  in the constructor

   }

  ngOnInit(): void {
  }

  handleLogin(){

    //Redirect to welcome page. We need an instance of the router to do this
    //if(this.username === "Sean Merz" && this.password==="dummy"){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }

}
