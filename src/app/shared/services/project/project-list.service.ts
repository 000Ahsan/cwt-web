import { Injectable } from '@angular/core';

import { Project } from '../../interface/product-list';

@Injectable({
  providedIn: 'root',
})
export class ProjectListService {
  listUser: Project[] | undefined;
}
