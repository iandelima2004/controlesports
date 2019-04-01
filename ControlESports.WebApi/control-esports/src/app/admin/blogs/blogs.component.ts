import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor(private router:Router) { }

  blogList: Array<any> = [
    {
      "Id": "5af7eedb8d0b5a51556c35c8",
      "Title": "adipisicing quis dolore ex mollit",
      "Description": "duis in nisi ad ex occaecat laborum laboris nulla deserunt",
      "Game": "minim",
      "CreatedBy": "Briggs",
      "IsActive": false,
      "CreatedDate": "2017-01-25T01:37:55 -11:00"
    },
    {
      "Id": "5af7eedb2b70ede1220a7a4f",
      "Title": "exercitation labore voluptate minim sint",
      "Description": "exercitation magna dolor nostrud velit reprehenderit enim occaecat proident amet",
      "Game": "fugiat",
      "CreatedBy": "Dickson",
      "IsActive": false,
      "CreatedDate": "2016-04-02T01:47:46 -11:00"
    },
    {
      "Id": "5af7eedb5295c2c3f3d98b84",
      "Title": "dolor duis occaecat irure nostrud",
      "Description": "amet mollit quis id proident do Lorem ullamco exercitation nostrud",
      "Game": "occaecat",
      "CreatedBy": "Guthrie",
      "IsActive": false,
      "CreatedDate": "2014-03-20T10:11:31 -11:00"
    },
    {
      "Id": "5af7eedb7fa4b72db992b66f",
      "Title": "commodo cillum laboris exercitation laborum",
      "Description": "esse fugiat eu aute irure culpa sunt eu irure consequat",
      "Game": "sit",
      "CreatedBy": "Gutierrez",
      "IsActive": false,
      "CreatedDate": "2017-02-15T02:28:52 -11:00"
    },
    {
      "Id": "5af7eedbf4b6e1d3d8b710f8",
      "Title": "nostrud aliqua nisi et exercitation",
      "Description": "nulla proident sint non eu anim ut est excepteur irure",
      "Game": "aute",
      "CreatedBy": "Mitchell",
      "IsActive": true,
      "CreatedDate": "2015-03-24T11:07:12 -11:00"
    },
    {
      "Id": "5af7eedb1bbe8db238cbdf43",
      "Title": "proident mollit culpa elit enim",
      "Description": "irure et sint id consectetur occaecat dolore id tempor nisi",
      "Game": "cillum",
      "CreatedBy": "Wiley",
      "IsActive": true,
      "CreatedDate": "2014-07-29T07:26:45 -10:00"
    },
    {
      "Id": "5af7eedb81e132319ac2a27f",
      "Title": "occaecat id culpa commodo eiusmod",
      "Description": "ad excepteur ad qui et sit laborum exercitation tempor ullamco",
      "Game": "eu",
      "CreatedBy": "Carr",
      "IsActive": true,
      "CreatedDate": "2015-06-26T02:39:19 -10:00"
    },
    {
      "Id": "5af7eedb61c9eac195361740",
      "Title": "amet consectetur magna cillum enim",
      "Description": "officia enim consectetur eu ullamco ea mollit mollit aliquip irure",
      "Game": "eu",
      "CreatedBy": "Yates",
      "IsActive": true,
      "CreatedDate": "2016-11-24T03:01:25 -11:00"
    },
    {
      "Id": "5af7eedb46b1e50b470f3cd3",
      "Title": "laboris qui nisi laboris esse",
      "Description": "ex id incididunt ad duis est non aliqua sunt nisi",
      "Game": "adipisicing",
      "CreatedBy": "Bentley",
      "IsActive": true,
      "CreatedDate": "2016-04-26T06:30:54 -10:00"
    }
  ];

  ngOnInit() {
  }

  showDetails(id: any) {
    console.log(id);
    this.router.navigate(['/admin/blogs/detail/' + id]);
  };

  editDetails(id: any) {
    console.log(id);
    this.router.navigate(['/admin/blogs/edit/' + id]);
  };

  delete(id: any) {
    console.log(id);

  };  

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
