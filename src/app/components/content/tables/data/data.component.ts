import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataService } from './data.service'
// import * as $ from 'jquery'

declare var $:any
window["$"] = $
window["jQuery"] = $

// import * as myCookie from '../../../../../assets/js/cookie.js'

// declare var cookie:any
// declare var co:any;

function pageselectCallback(page_index, jq){
	console.log(11111)
}
function getOptionsFromForm(){
    var opt = {callback: pageselectCallback};
    (opt as any).prev_text = "<<";
    (opt as any).next_text = ">>";
    (opt as any).items_per_page=8;
    (opt as any).num_display_entries=4;
    (opt as any).num_edge_entries=2;
    return opt;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  users:any
  editUser = {userName:""}
  addUser = {userName:"",password:""}
  

  constructor(private dataService:DataService) { }
  


  ngOnInit() {
    this.findAll()
  }

  // 查询所有用户信息
  findAll() {
    // console.log(111)
    // console.log(myCookie)
    console.log(getCookie("name"))
    this.dataService.findAll().subscribe(result => {
      if(result!=null &&(result as any).status){
        this.users = (result as any).data
        let optInit = getOptionsFromForm();
        $("#Pagination").pagination(this.users,optInit);
        console.log(this.users)
        console.log(optInit)
      }
    });
  }

  // 编辑信息
  showEditUser(user){
    this.editUser = this.deepCopy(user)
  }

  // 保存编辑信息
  saveEdit(){
    this.dataService.saveEdit(this.editUser).subscribe(result => {
      if(result!=null && (result as any).status){
        alert("保存成功！")
        this.findAll()
        $("#closeEditView").click()
      }else{
        alert((result as any).message)
      }
    })
  }

  // 初始化添加页面数据
  setAddData(){
    this.addUser = {userName:"",password:""}
  }

  // 添加用户信息
  saveAdd(){
    console.log(this.addUser)
    this.dataService.saveAdd(this.addUser).subscribe(result => {
      if(result!=null&&(result as any).status){
        alert((result as any).message)
        this.findAll()
        $("#closeAddView").click()
      }else{
        alert((result as any).message)
        this.addUser = {userName:"",password:""}
      }
    })
  }

  // 删除用户
  deleteUser(user){
    console.log(user)
    this.dataService.deleteUser(user).subscribe(result => {
      if(result!=null && (result as any).status){
        alert((result as any).message);
        this.findAll()
      }else{
        alert((result as any).message)
      }
    })
  }

  // 深拷贝
  private deepCopy(o) {
    if (o instanceof Array) {
        var n = [];
        for (var i = 0; i < o.length; ++i) {
            n[i] = this.deepCopy(o[i]);
        }
        return n;
    } else if (o instanceof Function) {
        let n = new Function("return " + o.toString())();
        return n
    } else if (o instanceof Object) {
        let n = {}
        for (let i in o) {
            n[i] = this.deepCopy(o[i]);
        }
        return n;
    } else {
        return o;
    }
}

}

