import {Component, OnInit} from '@angular/core';
import {AppConstants} from '../shared/AppConstants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  siteTitle: string = AppConstants.siteName;
  signUp: string = 'Sign Up';
  logIn: string = 'Log In';

  constructor() {
  }

  ngOnInit() {
  }

}
