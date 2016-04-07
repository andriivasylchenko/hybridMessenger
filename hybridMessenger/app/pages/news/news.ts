import {Page} from 'ionic-angular';
import {StorageService} from '../../providers/storage-service/storage-service';


@Page({
  templateUrl: 'build/pages/news/news.html',
})
export class NewsPage {
  storage:any;
  news: any;  
    
  constructor(storage: StorageService) {
      console.log('---> NewsPage init');
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
