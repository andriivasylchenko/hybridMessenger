import {Injectable, Inject} from 'angular2/core';

/*
  Generated class for the PushService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PushService {
  constructor() {
  }

  load() {
      MFPPush.initialize(
          function(successResponse) {
              console.log('---> push init success');
              
                MFPPush.registerNotificationsCallback(pushNotificationsReceived);
              
                MFPPush.registerDevice(
                    function(success){
                        console.log('---> push device register success');
                        
                        var tag=['messenger'];
                        
                        MFPPush.subscribe(tag, 
                        function(success){
                            console.log('---> push subscribe success');
                        },
                        function(failure){
                            console.log('---> push subscribe failure');
                        })
                    },
                    function(failure){
                        console.log('---> push device register failure', failure);
                    }
                )
              
          },
          function(failureResponse) {
              console.log('---> push init failure', failureResponse);
          }
      )

      function pushNotificationsReceived(message) {
          console.log('---> push notification received', message);
          alert(message.alert);
      }
  }
}

