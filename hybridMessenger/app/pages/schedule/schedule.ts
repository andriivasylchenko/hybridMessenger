import {Page} from 'ionic-angular';
import {ScheduleService} from '../../providers/schedule-service/schedule-service'
import {TimeDividerPipe} from '../../pipes/time-divider'


@Page({
  templateUrl: 'build/pages/schedule/schedule.html',
  pipes: [TimeDividerPipe]
})
export class SchedulePage {
  
  schedule: any;  
  delivery: any; 
  times: any;
   
  constructor(schedule: ScheduleService) {
      console.log('---> SchedulePage init');
      
      this.schedule = schedule;
      
      this.loadSchedule();

  }
  
  loadSchedule() {
      this.schedule.load().then((results) => {
          
          let tm = [];
          
          for (var i=0; i < results.length; i++) {
              if (tm.indexOf(results[i].time) == -1) tm.push(results[i].time)
          }
          console.log('---> times array', tm)
          this.times = tm;
          this.delivery = results;
          
          
      })
  }
}
