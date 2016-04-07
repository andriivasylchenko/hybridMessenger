import {Page} from 'ionic-angular';
import {EmployeeService} from '../../providers/employee-service/employee-service';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  
  items:any;  
    
  constructor(private employees: EmployeeService) {
      console.log('---> page1 init');
      
      this.loadEmployees();
  }
  
  loadEmployees() {
      console.log('---> called loadEmployees');
      this.employees.load().then((data) => {
          this.items = data;
      })
  }
}
