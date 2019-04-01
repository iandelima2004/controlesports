import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  achivementItem: any = {
    "Id": "5af7d73e851e9bbe79feab06",
    "AchievementName": "2015 - Virtual LAN Sydney First Place",
    "Game": "Counter-Strike",
    "IsActive": true,
    "CreatedDate": "2014-04-08T10:00:49 -10:00"
  };

}
