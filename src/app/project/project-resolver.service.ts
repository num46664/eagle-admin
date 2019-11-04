import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SearchService } from 'app/services/search.service';

@Injectable()
export class ProjectResolver implements Resolve<Object> {

  constructor(
    private searchService: SearchService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Object> {
    const projId = route.paramMap.get('projId');
    // // todo: think about whether we want to replace this next line with something like the line above
    // // legislation param is set to 'all' when we are on the project edit page
    // const legislationParam = route.url.some(url => url.path === 'edit' ) && route.paramMap.get('formTab') ? 'all' : '';
    let start = new Date();
    let end = new Date();
    start.setDate(start.getDate() - 7);
    end.setDate(end.getDate() + 7);
    return this.searchService.getSearchResults(
      '',
      'Project',
      [],
      1,
      1,
      '',
      '',
      {_id: projId},
      true,
      {}
    );
  }
}
