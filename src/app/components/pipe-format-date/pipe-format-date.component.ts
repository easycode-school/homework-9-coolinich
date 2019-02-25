import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-format-date',
  templateUrl: './pipe-format-date.component.html',
  styleUrls: ['./pipe-format-date.component.css']
})
export class PipeFormatDateComponent implements OnInit {
  public dateNow: Date = new Date();
  public dateYesterday: Date = new Date(this.dateNow.getTime() - 86400000);
  public dateHourBefore: Date = new Date(this.dateNow.getTime() - 3600000 - 3400000);
  public dateToday: Date = new Date(this.dateNow.getTime() - 82800000 - 125000);
  public dateMinuteBefore: Date = new Date(this.dateNow.getTime() - 60000 - 125000);
  public date2daysAgo: Date = new Date(this.dateNow.getTime() - 172800000 - 60000);

  constructor() { }

  ngOnInit() {
  }

}
