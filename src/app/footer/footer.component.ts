import {Component, OnInit} from '@angular/core';
import {AppConstants} from '../shared/AppConstants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();
  siteName: string = AppConstants.siteName;

  constructor() {
  }

  ngOnInit() {
  }

}
