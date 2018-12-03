import { Component, OnInit, TemplateRef } from '@angular/core'
import { DataService } from './data.service'
import { HttpClient, HttpHandler } from '@angular/common/http'

declare var $: any;
window['$'] = $;
window['jQuery'] = $;

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  users:any
  editUser = {userName:""}
  addUser = {userName:"",password:""}
  indexPage = 0
  

  constructor(private dataService: DataService) { }


  ngOnInit() {
    this.findAll(0)
  }

  // 查询所有用户信息
  findAll(page) {
    this.dataService.findAll(page).subscribe(result => {
      if(result!=null &&(result as any).status){
        this.users = (result as any).data.content;
        let optInit = this.getOptionsFromForm();
        $("#Pagination").pagination((result as any).data.totalElements,optInit);
        this.indexPage = (result as any).data.number;
      }
    });
  }

  // 供分页点击回调使用
  findAllForCallBack(page){
    this.dataService.findAll(page).subscribe(result => {
      if(result!=null &&(result as any).status){
        this.users = (result as any).data.content;
        this.indexPage = (result as any).data.number;
      }
    })
  }

  // 编辑信息
  showEditUser(user) {
    this.editUser = this.deepCopy(user);
  }

  // 保存编辑信息
  saveEdit() {
    this.dataService.saveEdit(this.editUser).subscribe(result => {
      if(result!=null && (result as any).status){
        alert("保存成功！")
        this.findAll(0)
        $("#closeEditView").click()
      }else{
        alert((result as any).message)
      }
    });
  }

  // 初始化添加页面数据
  setAddData() {
    this.addUser = {userName: '', password: ''};
  }

  // 添加用户信息
  saveAdd() {
    console.log(this.addUser);
    this.dataService.saveAdd(this.addUser).subscribe(result => {
      if(result!=null&&(result as any).status){
        alert((result as any).message)
        this.findAll(0)
        $("#closeAddView").click()
      }else{
        alert((result as any).message)
        this.addUser = {userName:"",password:""}
      }
    });
  }

  // 删除用户
  deleteUser(user) {
    console.log(user);
    this.dataService.deleteUser(user).subscribe(result => {
      if (result != null && (result as any).status) {
        alert((result as any).message);
        this.findAll(0);
      } else {
        alert((result as any).message);
        this.findAll(0)
      }
    });
  }

  pageselectCallback(page_index, jq){
    console.log(page_index)
    this.indexPage = page_index
    this.findAllForCallBack(page_index)
    return false;
  }
  getOptionsFromForm(){
      var opt = {
        callback: this.pageselectCallback,
        findAllForCallBack:this.findAllForCallBack.bind(this)
      };
      (opt as any).prev_text = "<<";
      (opt as any).next_text = ">>";
      (opt as any).items_per_page=10;
      (opt as any).num_display_entries=4;
      (opt as any).num_edge_entries=2;
      return opt;
  }

  // 深拷贝
  private deepCopy(o) {
    if (o instanceof Array) {
        const n = [];
        for (let i = 0; i < o.length; ++i ) {
            n[i] = this.deepCopy(o[i]);
        }
        return n;
    } else if (o instanceof Function) {
      const n = new Function('return ' + o.toString())();
        return n;
    } else if (o instanceof Object) {
      const n = {};
        for (const i of o) {
            n[i] = this.deepCopy(o[i]);
        }
        return n;
    } else {
        return o;
    }
  }

  

}

