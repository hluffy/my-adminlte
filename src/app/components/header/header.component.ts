import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { HeaderService } from './header.service'

declare var GoEasy:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSwitch:boolean = true
  headerUserName:string = ""

  constructor(
    private headerService:HeaderService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    // var goEasy = new GoEasy({
    //   appkey: "BC-f8180a08cf09467abe6a13765eb64f1c",
    //   onConnected: function () {
    //     console.log("成功连接。");
    //   },
    //   onDisconnected: function () {
    //     console.log("连接断开。");
    //   },
    //   onConnectFailed: function (error) {
    //     console.log("连接失败，错误编码："+error.code+"错误信息："+error.content);
    //   }
    // });

    // goEasy.subscribe({
    //   channel: "test",
    //   onMessage: function (message) {
    //     alert("您有新消息：channel：" + message.channel + " 内容：" + message.content);
    //   },
    //   onSuccess: function () {
    //     alert("Channel订阅成功。");
    //   },
    //   onFailed: function (error) {
    //     alert("Channel订阅失败, 错误编码：" + error.code + " 错误信息：" + error.content)
    //   }
    // });
    let browserLang = this.translateService.getBrowserLang();
    if(browserLang=='zh'){
      this.showSwitch = true
    }
    if(browserLang=='en'){
      this.showSwitch = false
    }

    this.headerUserName = getCookie("username")
  }

  Logout() {
    this.headerService.logout().subscribe(result => {
      if(result!=null && (result as any).status){
        window.location.href = "http://localhost/my-adminlte/";
      }
    })
  }

  OnClicnSwitch(){
    this.showSwitch = !this.showSwitch
  }

}
