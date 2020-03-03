import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Forum';
  opened = true;
  width;
  sidemode = 'side';

  constructor() { }

  ngOnInit(): void {
    this.width = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
    if(this.width < 768){
      this.opened = false;
      this.sidemode = 'over';
    } else {
      this.opened = true;
      this.sidemode = 'side';
    }
  }
}
