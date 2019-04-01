import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor() { }

  blogItem: any = {
    Title: ' Website is Now Live',
    Description: 'Control Launched their new website',
    CreatedBy: 'Exodus_AU',
    CreatedDate: '08/08/2015',
    GameId: 'Counter Strike',
    HeaderImage: 'http://i.imgur.com/PxIUkrC.png',
    FooterImage: 'http://i.imgur.com/PxIUkrC.png',
    IsActive: true,
    Post: '<p>We\'re Live! After months of development and several iterations, we are finally proud to have our new and improved website <b>launched!</b><br></p>'
  }

  ngOnInit() {
  }

}
