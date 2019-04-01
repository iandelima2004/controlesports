import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList: Array<any> = [];
  public dangerModal;

  constructor(private router: Router) { }

  //  <tr>
  //<th>Username < /th>
  //< th > Name < /th>
  //< th > Display Name< /th>
  //  < th > Roles < /th>
  //  < th > Registered < /th>
  //  < th > Actions < /th>
  //  < /tr>

  ngOnInit() {
    this.userList = [
      {
        "Id": "5af681c8f0bef116b2906293",
        "UserName": "Cecilia",
        "Name": "Hattie Bean",
        "DisplayName": "Gillespie",
        "Roles": [
          {
            "id": 0,
            "name": "admin"
          }
        ],
        "Registered": "2015-04-19T08:19:39 -10:00"
      },
      {
        "Id": "5af681c852f4ae96ab1bf8d0",
        "UserName": "Lidia",
        "Name": "Malinda Willis",
        "DisplayName": "Mcguire",
        "Roles": [
          {
            "id": 0,
            "name": "blogger"
          },
          {
            "id": 1,
            "name": "admin"
          }
        ],
        "Registered": "2016-09-18T05:07:52 -10:00"
      },
      {
        "Id": "5af681c8a71aaa691dfee1fd",
        "UserName": "Snyder",
        "Name": "Hillary Miller",
        "DisplayName": "Bullock",
        "Roles": [
          {
            "id": 0,
            "name": "admin"
          }
        ],
        "Registered": "2017-01-26T04:19:45 -11:00"
      },
      {
        "Id": "5af681c81f9543f3136b36a5",
        "UserName": "Guadalupe",
        "Name": "Herring Knapp",
        "DisplayName": "Patterson",
        "Roles": [
          {
            "id": 0,
            "name": "blogger"
          }
        ],
        "Registered": "2015-03-25T02:04:49 -11:00"
      },
      {
        "Id": "5af681c8cf9367f3f55ea73f",
        "UserName": "Hooper",
        "Name": "Vivian Blanchard",
        "DisplayName": "Hyde",
        "Roles": [
          {
            "id": 0,
            "name": "user"
          },
          {
            "id": 1,
            "name": "admin"
          }
        ],
        "Registered": "2015-08-30T06:26:21 -10:00"
      },
      {
        "Id": "5af681c84c118a47808c2481",
        "UserName": "Marissa",
        "Name": "Cecelia Richard",
        "DisplayName": "Nichols",
        "Roles": [
          {
            "id": 0,
            "name": "blogger"
          },
          {
            "id": 1,
            "name": "admin"
          }
        ],
        "Registered": "2018-03-24T09:17:26 -11:00"
      },
      {
        "Id": "5af681c8113d5e8026c68324",
        "UserName": "Maryellen",
        "Name": "Rae French",
        "DisplayName": "Calhoun",
        "Roles": [
          {
            "id": 0,
            "name": "admin"
          }
        ],
        "Registered": "2015-03-10T11:36:48 -11:00"
      },
      {
        "Id": "5af681c8cd49bfd7554772c6",
        "UserName": "Angelina",
        "Name": "Singleton Ayers",
        "DisplayName": "Hatfield",
        "Roles": [
          {
            "id": 0,
            "name": "blogger"
          }
        ],
        "Registered": "2015-03-30T01:40:41 -11:00"
      },
      {
        "Id": "5af681c8d2a71578c4e98704",
        "UserName": "Delores",
        "Name": "Lynch Hanson",
        "DisplayName": "Casey",
        "Roles": [
          {
            "id": 0,
            "name": "user"
          }
        ],
        "Registered": "2016-04-22T05:47:20 -10:00"
      },
      {
        "Id": "5af681c8e25f5627baa0ebe8",
        "UserName": "Sloan",
        "Name": "Stuart Mccullough",
        "DisplayName": "Lane",
        "Roles": [
          {
            "id": 0,
            "name": "blogger"
          }
        ],
        "Registered": "2014-12-14T03:06:37 -11:00"
      },
      {
        "Id": "5af681c8213a2b55b5f87bba",
        "UserName": "Myers",
        "Name": "Nettie Banks",
        "DisplayName": "Baker",
        "Roles": [
          {
            "id": 0,
            "name": "admin"
          },
          {
            "id": 1,
            "name": "user"
          },
          {
            "id": 2,
            "name": "blogger"
          }
        ],
        "Registered": "2018-02-27T10:34:12 -11:00"
      },
      {
        "Id": "5af681c8daa66a1ac92c0b1d",
        "UserName": "Susie",
        "Name": "Latisha Chavez",
        "DisplayName": "Battle",
        "Roles": [
          {
            "id": 0,
            "name": "admin"
          },
          {
            "id": 1,
            "name": "blogger"
          }
        ],
        "Registered": "2016-09-15T12:47:00 -10:00"
      },
      {
        "Id": "5af681c827a099462aacc53f",
        "UserName": "Reed",
        "Name": "Ortega Sweet",
        "DisplayName": "Patton",
        "Roles": [
          {
            "id": 0,
            "name": "blogger"
          }
        ],
        "Registered": "2016-07-07T08:43:49 -10:00"
      },
      {
        "Id": "5af681c8fbe7370186095264",
        "UserName": "Patterson",
        "Name": "Manning Browning",
        "DisplayName": "Hammond",
        "Roles": [
          {
            "id": 0,
            "name": "admin"
          },
          {
            "id": 1,
            "name": "blogger"
          },
          {
            "id": 2,
            "name": "blogger"
          }
        ],
        "Registered": "2017-01-03T11:00:23 -11:00"
      },
      {
        "Id": "5af681c81dc8f5323d6a4d42",
        "UserName": "Avila",
        "Name": "Edna Holmes",
        "DisplayName": "Middleton",
        "Roles": [
          {
            "id": 0,
            "name": "blogger"
          }
        ],
        "Registered": "2017-10-12T12:51:42 -11:00"
      }
    ];
  }

  showDetails(id: any) {
    console.log(id);
    this.router.navigate(['/admin/users/detail/' + id]);
  };

  editDetails(id: any) {
    console.log(id);
    this.router.navigate(['/admin/users/edit/' + id]);
  };

  delete(id: any) {
    console.log(id);
    
  };  
}
