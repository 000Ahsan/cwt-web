import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';
import * as latest from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-latest-articles-and-videos',
  templateUrl: './latest-articles-and-videos.html',
  styleUrls: ['./latest-articles-and-videos.scss'],
  imports: [FeatherIcons],
})
export class LatestArticlesAndVideos {
  public articlesAndVideos = latest.articlesAndVideos;
}
