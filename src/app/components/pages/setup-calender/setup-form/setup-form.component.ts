import { Time } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { format, addDays, differenceInDays} from 'date-fns'
import { Appointment } from 'src/app/models/Appointment';

@Component({
  selector: 'app-setup-form',
  templateUrl: './setup-form.component.html',
  styleUrls: ['./setup-form.component.css']
})
export class SetupFormComponent implements OnInit {


  // @ViewChild(SetTimeComponent) child:SetTimeComponent;

  upgradeVersion!: string;
  startDate!: any;
  endDate!: Date;
  upgradeHoursPerDay!: number;
  duration!:string;
  upgradeHours: Time[] = [];
  timeStart1!: Time;
  timeStart2!: Time;
  timeStart3!: Time;
  timeStart4!: Time;
  timeStart5!: Time;
  slotsTime1!: number;
  slotsTime2!: number;
  slotsTime3!: number;
  slotsTime4!: number;
  slotsTime5!: number;
  appointments : Appointment[] =[];


  constructor() { }

  ngOnInit(): void {
    this.onSubmit;
  }

  onSubmit(){
    this.startDate = new Date(this.startDate);
    this.endDate = new Date(this.endDate);
    let diffOfDays = differenceInDays(this.endDate, this.startDate);
    console.log("upgradeHours",this.upgradeHours);
    this.upgradeHours = [this.timeStart1, this.timeStart2, this.timeStart3, this.timeStart4, this.timeStart5 ]

    // for(let d = 0; d<= diffOfDays; d++){
    //   for(let h = 0; h<this.upgradeHoursPerDay; h++){

      
    //     let dato = format(addDays(this.startDate, d), "dd/MM/yyyy");
    //     let newAppointment: Appointment =
    //       {
    //         versionNumber: this.upgradeVersion,
    //         date : dato,
    //         hour: this.upgradeHours[h].toString(),
    //         durationMin: this.duration,
    //         available:true,
    //         executed: false
    //       }

    //       console.log(newAppointment);
    //       this.appointments.push(newAppointment)
    //     }
    //   }
      console.log(this.appointments);
    }


    appendTime(){
      console.log("add time");
    }
}
