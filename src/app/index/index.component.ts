import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  click_account = 0;

  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      this.click_account = (this.click_account + 1) % 4;
    }, 3000);
  }

  nextSlide() {
    this.click_account = (this.click_account + 1) % 4;
  }

  preSlide() {
    this.click_account = (this.click_account - 1) % 4;
  }
}
