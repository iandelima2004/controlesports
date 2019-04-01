import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor() { }


  userInfo: any = {
    "Id": "5af681c81dc8f5323d6a4d42",
    "UserName": "Avila",
    "Name": "Edna Holmes",
    "DisplayName": "Middleton",
    "Country": "Australia",
    "Flag": "flag-icon-au",
    "Roles": [
      {
        "id": 0,
        "name": "blogger"
      }
    ],
    "Registered": "2017-10-12T12:51:42 -11:00",
    EmailAddress: 'Middleton@yahoo.com'
  }


  ngOnInit() {
  }

}
