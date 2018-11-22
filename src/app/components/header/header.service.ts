import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appUrl } from '../../app.component'
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(
    private http:HttpClient
  ) { }

  // 退出
  logout(){
    return this.http.get(appUrl+"login/logout")
    .pipe(
      tap(_ => console.log(_)),
      catchError(null)
    )
  }
}
