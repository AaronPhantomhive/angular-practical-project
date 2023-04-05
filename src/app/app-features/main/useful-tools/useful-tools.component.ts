import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-useful-tools',
  templateUrl: './useful-tools.component.html',
  styleUrls: ['./useful-tools.component.scss']
})
export class UsefulToolsComponent implements OnInit {

  encodeUrl: string = "";
  decodeUrl: string = "";

  ngOnInit(): void {
  }

  encodeURL() {
    if(!this.encodeUrl) {
      return;
    }
    // encodeURIComponent
    this.decodeUrl = encodeURI(this.encodeUrl)
  }

  decodeURL() {
    if(!this.decodeUrl) {
      return;
    }
    // decodeURIComponent
    this.encodeUrl = decodeURI(this.decodeUrl)
  }

}
