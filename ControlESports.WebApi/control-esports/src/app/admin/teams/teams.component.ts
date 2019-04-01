import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showDetails(id: any) {
    console.log(id);
    this.router.navigate(['/admin/teams/detail/' + id]);
  };

  editDetails(id: any) {
    console.log(id);
    this.router.navigate(['/admin/teams/edit/' + id]);
  };

  delete(id: any) {
    console.log(id);

  };  
}
