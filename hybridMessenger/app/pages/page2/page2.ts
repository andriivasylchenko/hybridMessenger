import {Page} from 'ionic-angular';
import {StorageService} from '../../providers/storage-service/storage-service';


@Page({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {
  storage:any;
  news: any;  
    
  constructor(storage: StorageService) {
      console.log('---> page2 init');
      this.storage = storage;
      
      this.loadNews();
  }
  
  loadNews() {
      this.storage.getAll().then((results) => {
          console.log('---> news loaded', results);
          this.news = results;
      }, (failure) => {
          console.log('---> failed to load news', failure);
      })
  }
  
  
}
