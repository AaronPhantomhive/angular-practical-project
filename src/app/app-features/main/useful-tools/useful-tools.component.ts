import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-useful-tools',
  templateUrl: './useful-tools.component.html',
  styleUrls: ['./useful-tools.component.scss']
})
export class UsefulToolsComponent implements OnInit {

  inputEncodeUrl: string = "";
  encodeUrl: string = "";
  inputDecodeUrl: string = "";
  decodeUrl: string = "";

  ngOnInit(): void {
  }

  encodeURL() {
    // encodeURIComponent
    this.encodeUrl = encodeURI(this.inputEncodeUrl)
  }

  decodeURL() {
    // decodeURIComponent
    this.decodeUrl = decodeURI(this.inputDecodeUrl)
  }

}
