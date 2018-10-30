import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Params} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'EatWhat';
  index = 0;
  isShow = false;
  isLogin = false;
  uname = '';
  upwd = '';
  list = [
    '711豪华便当',
    '熊猫烧笋面',
    '乡村基鸡扒饭',
    '三汁闷锅',
    '竹篓香冒菜',
    '泌园餐厅',
    '小北门外王师傅铁板炒饭',
    '科华北路晴妹汃泥鳅',
    '小北门猪蹄汤',
    '澳州肥牛'
  ];

  constructor(private myRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.myRoute.queryParams.subscribe((params: Params) => {
      this.uname = params['uname'];
      this.upwd = params['upwd'];
      this.isLogin = params['isLogin'];
      console.log(this.uname, this.upwd, this.isLogin);
    });
  }

  eatWhat() {
    console.log(typeof((Math.random() * this.list.length).toFixed()));
    this.index = parseInt((Math.random() * this.list.length).toFixed(), 10);
    this.isShow = true;
  }

}
