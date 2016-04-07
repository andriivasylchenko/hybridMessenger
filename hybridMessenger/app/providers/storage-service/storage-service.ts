import {Injectable, Inject} from 'angular2/core';

/*
  Generated class for the StorageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StorageService {
  constructor() {

  }
  
  init() {
      console.log('---> called jsonstore init');
      let collections = {
          messages: {
              searchFields: {text: 'string', date: 'string'}
          }
      }
      
      WL.JSONStore.init(collections).then((success) => {
          console.log('---> jsonstore init success');
      }, (failure) => {
          console.log('---> jsonstore init failed');
      })
      
  }
  
  put(data) {
      console.log('---> called jsonstore put', data);
      let collectionName = 'messages';
      let options = {};
      
      WL.JSONStore.get(collectionName).add(data, options).then((success) => {
          console.log('---> data added to jsonstore');
      }, (failure) => {
          console.log('---> failed to add data to jsonstore');
      })
  }

  getAll() {
      console.log('---> called jsonstore getAll');
      

    return new Promise(resolve => {
      let collectionName = 'messages';
      let options = {};
      
      WL.JSONStore.get(collectionName).findAll(options).then((results) => {
          console.log('---> messages loaded from jsonstore', results);
          resolve(results);
      }, (failure) => {
          console.log('---> failed to load messages from jsonstore', failure);
          resolve('error');
      })
    })
  };

}

