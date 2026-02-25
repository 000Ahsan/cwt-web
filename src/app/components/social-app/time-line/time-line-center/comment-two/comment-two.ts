import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/feather-icons/feather-icons';
import * as data from '../../../../../shared/data/social-app/social-app';

@Component({
  selector: 'app-comment-two',
  templateUrl: './comment-two.html',
  styleUrls: ['./comment-two.scss'],
  imports: [FeatherIcons, NgClass],
})
export class CommentTwo {
  replyMassage: string;
  public massages = data.massages2;
}
