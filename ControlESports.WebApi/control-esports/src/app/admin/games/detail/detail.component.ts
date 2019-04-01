import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  gameDetail: any = {
    "Id": "5af7d73ea0c55f12495be45e",
    "Game": "Counter-Strike",
    "IsActive": true,
    CreatedBy: 'Exodus_AU',
    "CreatedDate": "2016-01-15T10:40:26 -11:00",
    "BlogItems": [
      {
        "Id": "5af6838ca67b1c51a29b9af2",
        "BlogName": "reprehenderit Lorem quis",
        "CreatedDate": "2017-10-25T10:44:45 -11:00",
        "TotalComments": 17
      },
      {
        "Id": "5af6838c2df59f341eefbb72",
        "BlogName": "aute adipisicing irure",
        "CreatedDate": "2015-08-15T06:19:15 -10:00",
        "TotalComments": 7
      },
      {
        "Id": "5af6838c64320a11489a3ca8",
        "BlogName": "mollit exercitation occaecat",
        "CreatedDate": "2015-01-05T09:45:08 -11:00",
        "TotalComments": 36
      },
      {
        "Id": "5af6838cf616070787e4463a",
        "BlogName": "esse culpa ullamco",
        "CreatedDate": "2018-01-20T04:51:19 -11:00",
        "TotalComments": 30
      },
      {
        "Id": "5af6838cf61e18f1ca04ef01",
        "BlogName": "quis irure sint",
        "CreatedDate": "2017-10-10T07:17:17 -11:00",
        "TotalComments": 22
      }
    ],
  }

  teamList: Array<any> = [
    {
      "Id": "5af9b3de117c54d54f8567ca",
      "Name": "qui minim",
      "Game": "Counter-Strike",
      "MemberCount": 39,
      "IsActive": false,
      "CreatedDate": "2017-12-03T06:38:25 -11:00",
      "TotamMatches": 12
    },
    {
      "Id": "5af9b3de49c6dc5a84b6196b",
      "Name": "Lorem officia",
      "Game": "Counter-Strike",
      "MemberCount": 39,
      "IsActive": true,
      "CreatedDate": "2014-09-30T03:15:57 -10:00",
      "TotamMatches": 24
    },
    {
      "Id": "5af9b3de64795cde80c6936b",
      "Name": "incididunt reprehenderit",
      "Game": "Counter-Strike",
      "MemberCount": 37,
      "IsActive": false,
      "CreatedDate": "2016-01-25T08:50:53 -11:00",
      "TotamMatches": 7
    },
    {
      "Id": "5af9b3de6cecb233d991b872",
      "Name": "Lorem officia",
      "Game": "Counter-Strike",
      "MemberCount": 40,
      "IsActive": true,
      "CreatedDate": "2017-07-12T01:06:31 -10:00",
      "TotamMatches": 17
    }
  ]


  constructor(public router: Router) { }

  ngOnInit() {
  }
  editDetails(id: any) {
    this.router.navigate(['/admin/games/edit/' + id]);
  };

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
