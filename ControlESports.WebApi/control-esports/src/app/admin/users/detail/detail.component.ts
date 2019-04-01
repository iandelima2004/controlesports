import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private router: Router) { }

  userInfo: any = {
    "Id": "5af681c81dc8f5323d6a4d42",
    "UserName": "Avila",
    "Name": "Edna Holmes",
    "Country": "Australia",
    "Flag": "flag-icon-au",
    "DisplayName": "Middleton",
    "Roles": [
      {
        "id": 0,
        "name": "blogger"
      }
    ],
    "Registered": "2017-10-12T12:51:42 -11:00",
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
    "CommentItems": [
      {
        "Id": "5af683ff36ed6792f7dd6381",
        "BlogName": "cupidatat cillum deserunt",
        "Comment": "duis Lorem veniam cillum do est ex pariatur minim pariatur",
        "CreatedDate": "2015-01-10T12:22:07 -11:00"
      },
      {
        "Id": "5af683ffc2cde96486376912",
        "BlogName": "consequat id officia",
        "Comment": "nisi ea tempor aliqua nostrud elit esse aute dolor aliquip",
        "CreatedDate": "2016-02-10T03:23:33 -11:00"
      },
      {
        "Id": "5af683ff97a1d9e2854eb717",
        "BlogName": "magna aliquip est",
        "Comment": "esse velit dolor qui cupidatat adipisicing eiusmod non veniam cupidatat",
        "CreatedDate": "2018-04-24T07:44:34 -10:00"
      },
      {
        "Id": "5af683ffb3cab9ac1ee7f383",
        "BlogName": "anim amet qui",
        "Comment": "veniam laborum aliquip consectetur exercitation esse labore Lorem in eiusmod",
        "CreatedDate": "2014-06-30T08:13:28 -10:00"
      },
      {
        "Id": "5af683ff04a4a40a533691f5",
        "BlogName": "ex culpa esse",
        "Comment": "laboris sint duis nostrud pariatur esse sunt eu magna pariatur",
        "CreatedDate": "2014-07-31T06:57:32 -10:00"
      },
      {
        "Id": "5af683ff1ccc69d884c52f3e",
        "BlogName": "excepteur sit incididunt",
        "Comment": "adipisicing in deserunt fugiat adipisicing pariatur nostrud ad ea ea",
        "CreatedDate": "2015-02-14T08:26:16 -11:00"
      },
      {
        "Id": "5af683ff8f2e28eac47c35ee",
        "BlogName": "enim commodo magna",
        "Comment": "ex minim ad ea ut incididunt fugiat dolore adipisicing incididunt",
        "CreatedDate": "2015-07-21T07:34:23 -10:00"
      }
    ]
  }

  teamList: Array<any> = [
    {
      "Id": "5af9b3de64795cde80c6936b",
      "Name": "incididunt reprehenderit",
      "Game": "Counter-Strike",
      "MemberCount": 37,
      "IsActive": false,
      "CreatedDate": "2016-01-25T08:50:53 -11:00",
      "TotamMatches": 7
    }
  ]

  teamSelectionList: Array<any> = [
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
    },
    {
      "Id": "5af9b3de7173e732c7dd77a5",
      "Name": "culpa exercitation",
      "Game": "Counter-Strike",
      "MemberCount": 40,
      "IsActive": false,
      "CreatedDate": "2015-03-25T08:16:47 -11:00",
      "TotamMatches": 12
    },
    {
      "Id": "5af9b3de4a48bb877d757e18",
      "Name": "laborum aliquip",
      "Game": "Counter-Strike",
      "MemberCount": 22,
      "IsActive": true,
      "CreatedDate": "2015-11-01T01:18:08 -11:00",
      "TotamMatches": 17
    },
    {
      "Id": "5af9b3deedc0ff5212c427a8",
      "Name": "enim quis",
      "Game": "Counter-Strike",
      "MemberCount": 26,
      "IsActive": false,
      "CreatedDate": "2018-01-23T08:31:24 -11:00",
      "TotamMatches": 26
    },
    {
      "Id": "5af9b3de571de951b6ca6c5e",
      "Name": "eiusmod aliquip",
      "Game": "Counter-Strike",
      "MemberCount": 38,
      "IsActive": false,
      "CreatedDate": "2015-12-01T04:51:39 -11:00",
      "TotamMatches": 11
    },
    {
      "Id": "5af9b3ded72f3a3c9fcf5370",
      "Name": "occaecat consectetur",
      "Game": "Counter-Strike",
      "MemberCount": 37,
      "IsActive": true,
      "CreatedDate": "2015-10-01T05:43:33 -10:00",
      "TotamMatches": 14
    }
  ]

  ngOnInit() {
  }


  editDetails(id: any) {
    console.log(id);
    this.router.navigate(['/admin/users/edit/' + id]);
  };

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
