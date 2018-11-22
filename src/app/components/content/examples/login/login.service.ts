import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { appUrl } from 'src/app/app.component'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) { }

  // 登录
  login (user) {
    return this.http.post(appUrl + "for-my-adminlte/login/login",user)
    .pipe(
      tap(_ => console.log(_)),
      catchError(null)
    )
  }
}
