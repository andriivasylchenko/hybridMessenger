import {Page} from 'ionic-angular';
import {ScheduleService} from '../../providers/schedule-service/schedule-service'


@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
  
  schedule: any;  
  delivery: any;  
  constructor(schedule: ScheduleService) {
      console.log('---> page3 init');
      
      this.schedule = schedule;
      
      this.loadSchedule();

  }
  
  loadSchedule() {
      this.schedule.load().then((results) => {
          
          this.delivery = results;
      })
  }
}
