import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  gameDetail: any = {
    "Id": "5af7d73ea0c55f12495be45e",
    "Game": "Counter-Strike",
    "IsActive": true,
    CreatedBy: 'Exodus_AU',
    "CreatedDate": "2016-01-15T10:40:26 -11:00"
  }


  constructor() { }

  ngOnInit() {
  }

}
