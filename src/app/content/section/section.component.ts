import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input() content: { imageName: string, title: string, description: string, alignedRight: boolean };

  constructor() {
  }

  ngOnInit() {
  }

}
