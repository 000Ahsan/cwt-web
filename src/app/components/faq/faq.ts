import { Component } from '@angular/core';

import { FaqTopPart } from './faq-top-part/faq-top-part';
import { FeaturedTutorials } from './featured-tutorials/featured-tutorials';
import { IntellectualProperty } from './intellectual-property/intellectual-property';
import { LatestArticlesAndVideos } from './latest-articles-and-videos/latest-articles-and-videos';
import { LatestUpdates } from './latest-updates/latest-updates';
import { Navigation } from './navigation/navigation';
import { QuickQueAndAns } from './quick-que-and-ans/quick-que-and-ans';
import { Search } from './search/search';
import { SellingAndBuying } from './selling-and-buying/selling-and-buying';
import { UserAccounts } from './user-accounts/user-accounts';
import * as faq from '../../shared/data/faq/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrls: ['./faq.scss'],
  imports: [
    FaqTopPart,
    QuickQueAndAns,
    IntellectualProperty,
    SellingAndBuying,
    UserAccounts,
    Search,
    Navigation,
    LatestUpdates,
    FeaturedTutorials,
    LatestArticlesAndVideos,
  ],
})
export class Faq {
  public faqData = faq.faqData;
}
