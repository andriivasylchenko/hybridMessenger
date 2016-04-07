import {Page} from 'ionic-angular';
import {EmployeeService} from '../../providers/employee-service/employee-service';


@Page({
  templateUrl: 'build/pages/rating/rating.html',
})
export class RatingPage {
  
  items:any;  
    
  constructor(private employees: EmployeeService) {
      console.log('---> RatingPage init');
      
      this.loadEmployees();
  }
  
  loadEmployees() {
      console.log('---> called loadEmployees');
      this.employees.load().then((data) => {
          this.items = data;
      })
  }
}
