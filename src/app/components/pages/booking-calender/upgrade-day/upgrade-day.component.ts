import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';

@Component({
  selector: 'app-upgrade-day',
  templateUrl: './upgrade-day.component.html',
  styleUrls: ['./upgrade-day.component.css']
})
export class UpgradeDayComponent implements OnInit {

  @Input() appointment!: Appointment;
  hours :any;
  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.hours= this.appointment.hour
  }

  setClasses(){
    let classes = {
      day:true,
      selected: this.selected
    }
    return classes;
  }



}
