import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  heading: string = 'One Page Wonder';
  subHeading: string = 'Will Rock Your Socks Off';
  learnMore: string = 'Learn More';

  constructor() {
  }

  ngOnInit() {
  }

}
