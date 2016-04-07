import {Injectable, Inject} from 'angular2/core';

/*
  Generated class for the ScheduleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ScheduleService {
    
  data: any;
  distance: any;
    
  constructor() {
    this.data = null;
    this.distance = null;
  }

  load() {
    console.log('---> called ScheduleService load');  
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      let dataRequest = new WLResourceRequest("/adapters/cloudantAdapter/getSchedule", WLResourceRequest.GET);
      
      dataRequest.send().then((response) => {
          console.log('---> adapter response', response.responseJSON.delivery);
          this.data = response.responseJSON.delivery;
          resolve(this.data);
      })
      
    });
  }
  
  calc(destinations) {
    console.log('---> called ScheduleService calc');  
    if (this.distance) {
      // already loaded data
      return Promise.resolve(this.distance);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      
      let curtime = Date.now();
      console.log('---> curtime', curtime);
      
      let origin = '50.019275,14.347424';
      
      let googleParams = 'origins=' + origin + '&destinations=' + destinations + '&departure_time=' + curtime + '&traffic_model=best_guess';
      
      console.log('---> googleParams', googleParams);
      
      let dataRequest = new WLResourceRequest("/adapters/googleApiAdapter/getDistance", WLResourceRequest.GET);
      
      dataRequest.setQueryParameter("params", '["' + googleParams + '"]')
      
      dataRequest.send().then((response) => {
          console.log('---> adapter response', response.responseJSON.rows[0].elements);
          this.distance = response.responseJSON.rows[0].elements;
          resolve(this.distance);
      })
      
    });
  }
  
}

