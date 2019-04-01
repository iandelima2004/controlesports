import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  IsAuthenticated = true;

  BlogItem = {
    CreatedBy: 'Exodus_AU',
    CreatedDate: 'Aug 12 2018',
    HeaderImageURL: '',
    FooterImageURL: '',
    Post: '<div>lalalaal</div>',
    BlogImage: '../../../../assets/images/blogs/icon/lolBlog.png'
  };

  Comments = [{}, {}, {}, {}, {}, {}]

  constructor() { }

  ngOnInit() {
  }

}
