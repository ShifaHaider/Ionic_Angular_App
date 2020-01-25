import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  list: any = [1, 2, 3];
  a: String = 'Hello';
  value:String=""
  constructor() { };
  getValue() {
    console.log(this.a);
  }

}
