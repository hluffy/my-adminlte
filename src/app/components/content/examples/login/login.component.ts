import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // user = {userName:"",password:""}

  constructor(
    private loginServer:LoginService
  ) { }

  ngOnInit() {
    
  }

  // Login() {
    // console.log(this.user)
    // this.loginServer.login(this.user).subscribe(result => {
    //   if(result!=null && (result as any).status){
    //   }
    // })
  // }

}
