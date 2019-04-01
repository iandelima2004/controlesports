import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  gameList: Array<any> = [
    {
      "Id": "5af7d73ea0c55f12495be45e",
      "Game": "Counter-Strike",
      "IsActive": true,
       CreatedBy: 'Exodus_AU',
      "CreatedDate": "2016-01-15T10:40:26 -11:00"
    },
    {
      "Id": "5af7d73e4c7476f3ea6184eb",
      "Game": "Call of Duty",
      "IsActive": false,
      CreatedBy: 'Exodus_AU',
      "CreatedDate": "2014-08-13T05:48:36 -10:00"
    },
    {
      "Id": "5af7d73e5340d0d93571709c",
      "Game": "Dota 2",
      "IsActive": true,
      CreatedBy: 'Exodus_AU',
      "CreatedDate": "2017-04-06T01:28:03 -10:00"
    },
    {
      "Id": "5af7d73e7028a743a9f59e05",
      "Game": "League of Legends",
      "IsActive": true,
      CreatedBy: 'Exodus_AU',
      "CreatedDate": "2017-12-22T12:46:48 -11:00"
    },
    {
      "Id": "5af7d73e8783c3a06fb5815b",
      "Game": "Starcraft 2",
      "IsActive": true,
      CreatedBy: 'Exodus_AU',
      "CreatedDate": "2016-08-22T05:01:11 -10:00"
    },
    {
      "Id": "5af7d73e0b1d8cded0cbea44",
      "Game": "Rocket League",
      "IsActive": true,
      CreatedBy: 'Exodus_AU',
      "CreatedDate": "2018-05-13T08:16:29 -10:00"
    },
    {
      "Id": "5af7d73e81216d68d37a3e28",
      "Game": "Rainbow Six Siege",
      "IsActive": true,
      CreatedBy: 'Exodus_AU',
      "CreatedDate": "2015-08-06T09:47:07 -10:00"
    },
    {
      "Id": "5af7d73e81216d68d37a3e28",
      "Game": "H1Z1",
      "IsActive": true,
      CreatedBy: 'Exodus_AU',
      "CreatedDate": "2015-08-06T09:47:07 -10:00"
    }
  ]


  constructor(private router: Router) { }

  ngOnInit() {
  }

  showDetails(id: any) {
    console.log(id);
    this.router.navigate(['/admin/games/detail/' + id]);
  };

  editDetails(id: any) {
    console.log(id);
    this.router.navigate(['/admin/games/edit/' + id]);
  };

  delete(id: any) {
    console.log(id);
  };
}
