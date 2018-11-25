import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AppService } from './app.service' ;

export const appUrl = 'http://localhost/for-my-adminlte/';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'my-adminlte';
  loginheight = window.innerHeight + 'px';
  showLogin = false;
  user = {userName: '', password: ''};

  constructor (private appService: AppService, private translate: TranslateService) {
    // 添加语言支持
    translate.addLangs(['en', 'zh']);

    // 设置默认语言，一般在无法匹配的时候使用
    translate.setDefaultLang('zh');
    // 获取当前浏览器环境的语言比如en、 zh
    const browserLang = translate.getBrowserLang();
    // browserLang = 'en'
    translate.use(browserLang.match(/en|zh/) ? browserLang : 'zh');

  }

  ngOnInit () {
    console.log('--------------------------');
    console.log('sssssssssssssssssssssssssss');
    this.test();
  }


  test() {
    this.appService.test().subscribe(data => {
      console.log(data);
      if (data != null && (data as any).status) {
        this.showLogin = false;
      } else {
        this.showLogin = true;
      }
      if (data != null && !(data as any).status && (data as any).code === 1302) {
        this.showLogin = true;
      }
    });
  }

  // 登录
  Login() {
    console.log(this.user);
    this.appService.login(this.user).subscribe(result => {
      if (result != null && (result as any).status) {
        this.showLogin = false;
        // 刷新页面
        window.location.reload();
      } else {
        alert((result as any).message);
      }
    });
  }


}
