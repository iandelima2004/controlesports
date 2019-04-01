import { Component, ElementRef, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';

import Quill from 'quill';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  blogItem: any = {
    Title: ' Website is Now Live',
    Description: 'Control Launched their new website',
    CreatedBy: 'Exodus_AU',
    CreatedDate: '08/08/2015',
    GameId: 'Counter Strike',
    HeaderImage: 'http://i.imgur.com/PxIUkrC.png',
    FooterImage: 'http://i.imgur.com/PxIUkrC.png',
    IsActive: true,
    Post: '<p>We\'re Live! After months of development and several iterations, we are finally proud to have our new and improved website <b>launched!</b><br></p>',
    CommentItems: [
      {
        "Id": "5af871b2d14d2edfa29d56ad",
        "UserName": "Tamra Copeland",
        "Comment": "Lorem anim amet dolore excepteur ullamco est laboris non consectetur",
        "Flag": "flag-icon-in",
        "IsActive": false,
        "CreatedDate": "2016-12-19T06:04:06 -11:00"
      },
      {
        "Id": "5af871b295985f99ab6b436e",
        "UserName": "Essie Mercer",
        "Comment": "proident aute fugiat ex aliqua officia culpa reprehenderit ex ad",
        "Flag": "flag-icon-us",
        "IsActive": false,
        "CreatedDate": "2017-05-24T02:50:11 -10:00"
      },
      {
        "Id": "5af871b2fcd98e4aeee620ae",
        "UserName": "Stella Mullins",
        "Comment": "aliqua officia mollit amet eiusmod dolore non anim ex voluptate",
        "Flag": "flag-icon-us",
        "IsActive": true,
        "CreatedDate": "2014-09-08T08:01:45 -10:00"
      },
      {
        "Id": "5af871b28c105493adca5a29",
        "UserName": "Paul Montgomery",
        "Comment": "velit ex proident exercitation laborum incididunt dolore consectetur sit sunt",
        "Flag": "flag-icon-au",
        "IsActive": false,
        "CreatedDate": "2014-07-25T08:07:40 -10:00"
      },
      {
        "Id": "5af871b25504d4df1a8a0550",
        "UserName": "Phillips Fulton",
        "Comment": "officia magna consectetur aliquip voluptate do dolore sit labore commodo",
        "Flag": "flag-icon-us",
        "IsActive": true,
        "CreatedDate": "2017-08-12T11:38:50 -10:00"
      },
      {
        "Id": "5af871b25124c9ed410dcf46",
        "UserName": "Acevedo Smith",
        "Comment": "officia ea ut nulla minim culpa pariatur velit ipsum veniam",
        "Flag": "flag-icon-ph",
        "IsActive": true,
        "CreatedDate": "2018-03-08T01:47:19 -11:00"
      }
    ]
  }

  constructor(fb: FormBuilder, public router:Router) {
  }
  @ViewChild('editor') editor: QuillEditorComponent


  checkPost(): void {
    alert(this.blogItem.Post);
  }

  ngOnInit() {
   
  }

  editDetails(id: any) {
    console.log(id);
    this.router.navigate(['/admin/blogs/edit/' + id]);
  };
}
