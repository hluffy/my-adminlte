import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appUrl } from 'src/app/app.component';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }

  // 查询所有用户信息
<<<<<<< HEAD
  findAll(page){
    return this.http.get(appUrl + "user/findall?page="+page)
=======
  findAll() {
    return this.http.get(appUrl + 'user/findall')
>>>>>>> refs/remotes/origin/master
    .pipe(
      tap(_ => console.log(_)),
      catchError(null)
    ); }

  // 编辑用户
  saveEdit(user) {
    return this.http.post(appUrl + 'user/edituser', user)
    .pipe(
      tap(_ => console.log(_)),
      catchError(null)
    );
  }

  // 添加用户
  saveAdd(user) {
    return this.http.post(appUrl + 'user/save', user)
    .pipe(
      tap(_ => console.log(_)),
      catchError(null)
    );
  }

  // 删除用户
  deleteUser(user) {
    return this.http.post(appUrl + 'user/deleteuser', user)
    .pipe(
      tap(_ => console.log(_)),
      catchError(null)
    );
  }
}
