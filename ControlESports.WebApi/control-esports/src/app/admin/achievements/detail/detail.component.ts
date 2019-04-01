import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private router: Router ) { }

  achivementItem: any = {
    "Id": "5af7d73e851e9bbe79feab06",
    "AchievementName": "2015 - Virtual LAN Sydney First Place",
    "Game": "Counter-Strike",
    "IsActive": true,
    "CreatedDate": "2014-04-08T10:00:49 -10:00"
  };

  ngOnInit() {
  }

  editDetails(id: any) {
    console.log(id);
    this.router.navigate(['/admin/achievements/edit/' + id]);
  };

}
