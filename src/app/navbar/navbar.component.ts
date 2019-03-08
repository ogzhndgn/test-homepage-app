import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  siteTitle: string = 'CorePirates';
  signUp: string = 'Sign Up';
  logIn: string = 'Log In';

  constructor() {
  }

  ngOnInit() {
  }

}
