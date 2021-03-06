import {Injectable, Inject} from 'angular2/core';

/*
  Generated class for the EmployeeService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EmployeeService {
  
  data:any;  
    
  constructor() {
    this.data = null;
  }

  load() {
    console.log('---> called EmployeeService load');  
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      let dataRequest = new WLResourceRequest("/adapters/messengerAdapter/getEmployeeRating", WLResourceRequest.GET);
      
      dataRequest.send().then((response) => {
          console.log('---> adapter response', response.responseJSON.results);
          this.data = response.responseJSON.results;
          resolve(this.data);
      })
      
    });
  }
}

