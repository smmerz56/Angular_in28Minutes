import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import {AppComponent} from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  //message = 'Some welcome message'
  name = ''
  
  //ActivatedRoute:This allows us to accept the route parameter. Inject dependancy
  //What is the route that is currently active? Get that, and from there get
  // parameter which is passed in.
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

}

// export class Class1{

// }