import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upgrade-calender',
  templateUrl: './upgrade-calender.component.html',
  styleUrls: ['./upgrade-calender.component.css']
})
export class UpgradeCalenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buildMonth(){}
}

// kalender henter dagens dato
// genererer antall daycomponents med 7 på hver linje (med mindre en viss størrelse)
// kalender fetcher slots fra den gitte måneden 
// oppretter groups array basert på tidspunkt, genererer html for goups og slots

