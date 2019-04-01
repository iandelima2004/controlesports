import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public playerDetail: any = {
    "Id": "5af940e4c93b2d348146b2a7",
    "Name": "Levine Mccarthy",
    "Country": "United States",
    "Flag": "flag-icon-us",
    "ProfilePic": "5af940e4fdb6d67c709259fb",
    "IsActive": true,
    "CreatedDate": "2017-12-08",
    "Team": "RL-Team1",
    "PcBuild": "mouse: SteelSeries Rival mousepad: SteelSeries QCK Pad Mini sens: 3.5 dpi: 400"
  };

  constructor() { }

  ngOnInit() {
  }

}
