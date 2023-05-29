import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-useful-tools',
  templateUrl: './useful-tools.component.html',
  styleUrls: ['./useful-tools.component.scss']
})
export class UsefulToolsComponent implements OnInit {

  encodeUrl: string = "";
  decodeUrl: string = "";

  num: number | undefined = undefined;
  charCode:string = "";

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

  numberToCharCode() {
    if(!this.num) {
      return;
    }

    this.charCode = "";

    let tempNum: number = this.num;
    while (tempNum > 0) {
      let remainder = tempNum % 26;
      if (remainder === 0) {
        remainder = 26;
      }
      this.charCode = String.fromCharCode(64 + remainder) + this.charCode;
      tempNum = (tempNum - remainder) / 26;
    }
  }

  charCodeToNumber() {
    if(!this.charCode) {
      return;
    }

    this.num = 0;

    for (let i = this.charCode.length - 1, j = 1; i >= 0; i--, j *= 26) {
      this.num += (this.charCode.charCodeAt(i) - 64) * j;
    }

  }
}
