import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  playerList: Array<any> = [
    {
      "Id": "5af940e415d96cfc23d9f9c4",
      "Name": "Sherri Delaney",
      "Country": "New Zealand",
      "Flag": "flag-icon-nz",
      "ProfilePic": "5af940e4128f6b5787af3daa",
      "IsActive": true,
      "CreatedDate": "2014-08-19",
      "Team": "CS-Team1",
      "PcBuild": "mouse: SteelSeries Rival mousepad: SteelSeries QCK Pad Mini sens: 3.5 dpi: 400"
    },
    {
      "Id": "5af940e465a9a889ce1406ec",
      "Name": "Howell Holman",
      "Country": "Monaco",
      "Flag": "flag-icon-mn",
      "ProfilePic": "5af940e41f60071929b8e4c7",
      "IsActive": true,
      "CreatedDate": "2017-06-10",
      "Team": "CS-Team2",
      "PcBuild": "mouse: SteelSeries Rival mousepad: SteelSeries QCK Pad Mini sens: 3.5 dpi: 400"
    },
    {
      "Id": "5af940e447ac1dc8d2b93772",
      "Name": "Wilkerson Dixon",
      "Country": "Panama",
      "Flag": "flag-icon-pn",
      "ProfilePic": "5af940e4fcc24381f74e694e",
      "IsActive": true,
      "CreatedDate": "2017-04-05",
      "Team": "CS-Team3",
      "PcBuild": "mouse: SteelSeries Rival mousepad: SteelSeries QCK Pad Mini sens: 3.5 dpi: 400"
    },
    {
      "Id": "5af940e44a672d0c23e34f66",
      "Name": "Lynn Mcneil",
      "Country": "Martinique",
      "Flag": "flag-icon-mr",
      "ProfilePic": "5af940e452cb35c9fdac2f2d",
      "IsActive": true,
      "CreatedDate": "2016-02-02",
      "Team": "LOL-Team1",
      "PcBuild": "mouse: SteelSeries Rival mousepad: SteelSeries QCK Pad Mini sens: 3.5 dpi: 400"
    },
    {
      "Id": "5af940e4d7c769df81265833",
      "Name": "Roberson Fischer",
      "Country": "Eritrea",
      "Flag": "flag-icon-er",
      "ProfilePic": "5af940e49e2819b5394df2d1",
      "IsActive": false,
      "CreatedDate": "2015-07-01",
      "Team": "LOL-Team2",
      "PcBuild": "mouse: SteelSeries Rival mousepad: SteelSeries QCK Pad Mini sens: 3.5 dpi: 400"
    },
    {
      "Id": "5af940e4bcf142d6a197edfa",
      "Name": "Patti Hopper",
      "Country": "Zaire",
      "Flag": "flag-icon-za",
      "ProfilePic": "5af940e43ca8ee23e84783f9",
      "IsActive": false,
      "CreatedDate": "2016-02-05",
      "Team": "LOL-Team3",
      "PcBuild": "mouse: SteelSeries Rival mousepad: SteelSeries QCK Pad Mini sens: 3.5 dpi: 400"
    },
    {
      "Id": "5af940e4c93b2d348146b2a7",
      "Name": "Levine Mccarthy",
      "Country": "United States",
      "Flag": "flag-icon-us",
      "ProfilePic": "5af940e4fdb6d67c709259fb",
      "IsActive": true,
      "CreatedDate": "2017-12-08",
      "Team": "RL-Team1",
      "PcBuild": "mouse: SteelSeries Rival mousepad: SteelSeries QCK Pad Mini sens: 3.5 dpi: 400"
    },
    {
      "Id": "5af940e4db7cea1a20fce8f1",
      "Name": "Lacey Gates",
      "Country": "Saudi Arabia",
      "Flag": "flag-icon-sa",
      "ProfilePic": "5af940e44e18c7c8026e3ab5",
      "IsActive": true,
      "CreatedDate": "2017-12-05",
      "Team": "RL-Team2",
      "PcBuild": "mouse: SteelSeries Rival mousepad: SteelSeries QCK Pad Mini sens: 3.5 dpi: 400"
    },
    {
      "Id": "5af940e40ca6b6881556d3e6",
      "Name": "Lakeisha Vinson",
      "Country": "Australia",
      "Flag": "flag-icon-au",
      "ProfilePic": "5af940e4c7154b71e10cbd98",
      "IsActive": true,
      "CreatedDate": "2014-01-21",
      "Team": "RL-Team3",
      "PcBuild": "mouse: SteelSeries Rival mousepad: SteelSeries QCK Pad Mini sens: 3.5 dpi: 400"
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showDetails(id: any) {
    console.log(id);
    this.router.navigate(['/admin/players/detail/' + id]);
  };

  editDetails(id: any) {
    console.log(id);
    this.router.navigate(['/admin/players/edit/' + id]);
  };

  delete(id: any) {
    console.log(id);

  };

}
