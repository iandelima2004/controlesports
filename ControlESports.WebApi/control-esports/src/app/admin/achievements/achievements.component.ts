import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Router } from '@angular/router';


@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  public brandBoxChartData4: Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Achievements'
    }
  ];

  public brandBoxChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public brandBoxChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public brandBoxChartColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public brandBoxChartLegend = false;
  public brandBoxChartType = 'line';


  achievementList: Array<any> = [
    {
      "Id": "5af7d73e851e9bbe79feab06",
      "AchievementName": "2015 - Virtual LAN Sydney First Place",
      "Game": "Counter-Strike",
      "IsActive": true,
      "CreatedDate": "2014-04-08T10:00:49 -10:00"
    },
    {
      "Id": "5af7d73ea0c55f12495be45e",
      "AchievementName": "2015 - Division 2 Cyber Gamer Champions",
      "Game": "Counter-Strike",
      "IsActive": true,
      "CreatedDate": "2016-01-15T10:40:26 -11:00"
    },
    {
      "Id": "5af7d73e4c7476f3ea6184eb",
      "AchievementName": "2015 - Faceit Oceanic League Champions",
      "Game": "Counter-Strike",
      "IsActive": true,
      "CreatedDate": "2014-08-13T05:48:36 -10:00"
    },
    {
      "Id": "5af7d73e5340d0d93571709c",
      "AchievementName": "2015 - TTHub LAN Melbourne Second Place",
      "Game": "Counter-Strike",
      "IsActive": true,
      "CreatedDate": "2017-04-06T01:28:03 -10:00"
    },
    {
      "Id": "5af7d73e7028a743a9f59e05",
      "AchievementName": "2014 - Cyber Gamer Champions",
      "Game": "Call of Duty",
      "IsActive": true,
      "CreatedDate": "2017-12-22T12:46:48 -11:00"
    },
    {
      "Id": "5af7d73e8783c3a06fb5815b",
      "AchievementName": "2014 - ACG Amateur Cup Champions	",
      "Game": "	Call of Duty",
      "IsActive": true,
      "CreatedDate": "2016-08-22T05:01:11 -10:00"
    },
    {
      "Id": "5af7d73e0b1d8cded0cbea44",
      "AchievementName": "2014 - ACL Second Place",
      "Game": "League of Legends",
      "IsActive": true,
      "CreatedDate": "2018-05-13T08:16:29 -10:00"
    },
    {
      "Id": "5af7d73e81216d68d37a3e28",
      "AchievementName": "2015 - Cyber Gamer Open League Champions",
      "Game": "Dota 2",
      "IsActive": true,
      "CreatedDate": "2015-08-06T09:47:07 -10:00"
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showDetails(id: any) {
    console.log(id);
    this.router.navigate(['/admin/achievements/detail/' + id]);
  };

  editDetails(id: any) {
    console.log(id);
    this.router.navigate(['/admin/achievements/edit/' + id]);
  };

  delete(id: any) {
    console.log(id);
  };
}
