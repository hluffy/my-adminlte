import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appUrl } from './app.component'
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private http:HttpClient
  ) { }

  test() {
    return this.http.get(appUrl+"test/test")
  }

  // 登录
  login(user) {
    return this.http.post(appUrl+"login/login",user)
    .pipe(
      tap(_ => console.log(_)),
      catchError(null)
    )
  }
}
