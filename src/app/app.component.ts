import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-title';
  count = 9;
  N1=1;
  s=0;
  N2=6;
  list = [12,34,13,56,32,23];
  str = ["abc" , "def" , "ghi" , "jkl" , "mno" , "pqr" , "stu" , "vwx" , "yz"]

  increment = () => {
    this.count++;
  }
  decrement = () => {
    this.count--;
  }
  ADD = () => {
     this.s = this.N1 + this.N2;
  }
}
