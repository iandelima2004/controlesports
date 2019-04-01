import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navigator',
  templateUrl: './main-navigator.component.html',
  styleUrls: ['./main-navigator.component.scss']
})
export class MainNavigatorComponent implements OnInit {

  isCollapsed = false;
  isCollapsedAccountMenu = false;
  constructor() { }
  
  ngOnInit() {
  }

  ToggleAccountMenu(): void {
    this.isCollapsedAccountMenu = !this.isCollapsedAccountMenu;
    alert(this.isCollapsedAccountMenu);
  }

}
