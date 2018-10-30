import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() uname = '';
  @Input() upwd = '';
  @Input() isLoginsuccess = false;
  kw = '';

  constructor(private myHttp: HttpClient,
              private myRouter: Router) {
  }

  ngOnInit() {
  }

  signin() {
    this.myRouter.navigateByUrl('login');
  }

  signout() {
    this.isLoginsuccess = false;

  }
}
