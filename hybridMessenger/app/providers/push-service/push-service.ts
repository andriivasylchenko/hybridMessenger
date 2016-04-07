import {Injectable, Inject} from 'angular2/core';
import {StorageService} from '../storage-service/storage-service';

/*
  Generated class for the PushService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PushService {
  
  storage: any;  
    
  constructor(storage: StorageService) {
      this.storage = storage;
  }

  load() {
      MFPPush.initialize(
          (successResponse) => {
              console.log('---> push init success');
              
                MFPPush.registerNotificationsCallback(this.pushNotificationsReceived);
              
                MFPPush.registerDevice(
                    (success) => {
                        console.log('---> push device register success');
                        
                        var tag=['messenger'];
                        
                        MFPPush.subscribe(tag, 
                        (success) => {
                            console.log('---> push subscribe success');
                        },
                        (failure) => {
                            console.log('---> push subscribe failure');
                        })
                    },
                    (failure) => {
                        console.log('---> push device register failure', failure);
                    }
                )
              
          },
          (failureResponse) => {
              console.log('---> push init failure', failureResponse);
          }
      )
  }
  
        pushNotificationsReceived = (message) => {
          console.log('---> push notification received', message);
          alert(message.alert);
          
          let ts = new Date().getTime();
          let msg = {text: message.alert, date: ts};
          
          this.storage.put(msg);
      }
}

