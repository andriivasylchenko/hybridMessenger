import {Page} from 'ionic-angular';
import {SchedulePage} from '../schedule/schedule';
import {NewsPage} from '../news/news';
import {RatingPage} from '../rating/rating';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SchedulePage;
  tab2Root: any = NewsPage;
  tab3Root: any = RatingPage;
}
