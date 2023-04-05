import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-record-time',
  templateUrl: './record-time.component.html',
  styleUrls: ['./record-time.component.scss']
})
export class RecordTimeComponent implements OnInit {
  currentTime: Date = new Date();
  currentTimestamp: number = Math.round(new Date().getTime() / 1000);

  @Input() recordTimeInfos: RecordTimeInfo[] = [];

  @Output() recordTimeInfosChange = new EventEmitter<RecordTimeInfo[]>();

  ngOnInit(): void {
    this.RunningTime();
  }

  RunningTime() {
    setInterval(() => {
      this.currentTime = new Date();
      this.currentTimestamp = Math.round(new Date().getTime() / 1000);
    }, 1000);
  }

  record() {
    this.recordTimeInfos?.push({inputMessage: "", recordTime: this.currentTime});
  }

  saved() {

    for (let i = 0; i < this.recordTimeInfos.length; i++) {
      if (this.recordTimeInfos[i].inputMessage.length == 0) {
        alert("Error: line " + (i + 1) + " is empty.");
        return;
      }
      if (this.recordTimeInfos[i].inputMessage.length > 10) {
        alert("Error: line " + (i + 1) + " is too long.");
        return;
      }
    }

    // TODO save
    console.log(this.recordTimeInfos);
  }

}

export type RecordTimeInfo = {
  inputMessage: string;
  recordTime: Date;
}
