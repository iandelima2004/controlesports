import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { each as _each } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  title = 'app';

  runcalculation = function () {
    _each([1, 2, 3, 4, 56], function (a) {
      console.log(a);
    });
  }
}
