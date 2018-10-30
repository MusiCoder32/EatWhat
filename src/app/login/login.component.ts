import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname = 'dangdang';
  upwd = '123456';

  constructor(private myRoute: Router, private myHttp: HttpClient) {
  }

  ngOnInit() {
    console.log(this.myRoute);
  }

  signin() {
    this.myRoute.navigate(['/'], {queryParams: {'uname': this.uname, 'upwd': this.upwd, 'isLogin': true}});
  }
}
