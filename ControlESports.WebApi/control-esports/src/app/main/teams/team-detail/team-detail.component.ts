import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  teamDetailList = [{
    displayPicture: null,
    teamLeader: true,
    orgAdmin: true,
    substitute: true,
    name: "Travis \"Hoodz_AU\" Bowen",
    pCBuild: "MSi Z170A gaming M7 || Radeon R9 295x2 || Intel Core i7 6700 || G.Skill Ripjaws 4 F4-2666C15Q-32GRR 16GB (4x4GB) DDR4 Red ||",
    crosshair: "cl_crosshairsize 4 || cl_crosshairsgap -2 || cl_crosshairdot 0 || cl_crosshairstyle 4 || cl_crosshaircolor 4",
    favMap : "de_cbble"
  }, {}, {
    displayPicture: null,
    teamLeader: true,
    orgAdmin: true,
    substitute: true,
    name: "Travis \"Hoodz_AU\" Bowen",
    pCBuild: "MSi Z170A gaming M7 || Radeon R9 295x2 || Intel Core i7 6700 || G.Skill Ripjaws 4 F4-2666C15Q-32GRR 16GB (4x4GB) DDR4 Red ||",
    crosshair: "cl_crosshairsize 4 || cl_crosshairsgap -2 || cl_crosshairdot 0 || cl_crosshairstyle 4 || cl_crosshaircolor 4",
    favMap: "de_cbble"
  }, {}, {}];

  constructor() { }

  ngOnInit() {
  }

}
