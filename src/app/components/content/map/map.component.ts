import { Component, OnInit } from '@angular/core';

declare var AMap:any

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var map = new AMap.Map('container', {
      resizeEnable: true, //是否监控地图容器尺寸变化
      zoom:11, //初始化地图层级
      center: [116.397428, 39.90923] //初始化地图中心点
  });
  }

}
