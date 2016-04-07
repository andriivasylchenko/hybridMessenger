import 'es6-shim';
import {App, Platform, Alert, NavController, IonicApp} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {Renderer} from 'angular2/core';
import {EmployeeService} from './providers/employee-service/employee-service';
import {PushService} from './providers/push-service/push-service';
import {StorageService} from './providers/storage-service/storage-service';


@App({
  template: '<ion-nav id="myNav" [root]="rootPage"></ion-nav>',
  providers: [EmployeeService, PushService, StorageService],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any;
  AuthHandler: any;
  nav: any;
  app: any;
  push: any;
  storage: any;

  constructor(platform: Platform, renderer:Renderer, app: IonicApp, push: PushService, storage: StorageService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
    
    this.push = push;
    
    this.app = app;
    
    this.storage = storage;
    
    renderer.listenGlobal('document', 'wlInitFinished', () => {
        console.log('---> wlInitFinished event received');
        this.MFPInit();
    })
  }
  
  MFPInit() {
      this.rootPage = TabsPage;
      this.AuthInit();
      this.push.load();
  }
  
  ngAfterViewInit() {
      this.nav = this.app.getComponent('myNav');
  }
  
  AuthInit() {
      this.AuthHandler = WL.Client.createWLChallengeHandler("UserLogin");
      
      this.AuthHandler.handleChallenge = ((response) => {
          console.log('---> inside handleChallenge');
          
          if(response.errorMsg){
              var msg = response.errorMsg + "<br>";
              msg += "Remaining attemts: " + response.remainingAttempts;
          }
          
          this.displayLogin(msg);
          
      })
  }
  
  displayLogin(msg) {
      
      let prompt = Alert.create({
      title: 'Login',
      message: msg,
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Login',
          handler: data => {
            console.log('---> Trying to auth user', data.username);
            this.AuthHandler.submitChallengeAnswer(data);
            this.storage.init();
          }
        }
      ]
    });
    
    this.nav.present(prompt);
      
  }
}
