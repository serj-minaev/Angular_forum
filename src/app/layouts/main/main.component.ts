import {Component, OnInit} from '@angular/core';

// export interface Category {
//   // name: string;
//   text: string;
//   img: string;
//   title: string;
// }
export interface Card {
  img: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cards: Card[] = [
    // tslint:disable-next-line:max-line-length
    {title: 'FrontEnd', text: 'Description of FrontEnd Category', img: 'https://cdn3.iconfinder.com/data/icons/design-and-development-15/256/87-512.png'},

    {title: 'BackEnd',
      text: 'Description of BackEnd Category',
      img: 'https://cdn3.iconfinder.com/data/icons/design-and-development-15/256/87-512.png'},
    // tslint:disable-next-line:max-line-length
    {title: 'Design', text: 'Description of Design Category', img: 'https://cdn3.iconfinder.com/data/icons/design-and-development-15/256/87-512.png'},
    // tslint:disable-next-line:max-line-length
    {title: 'Project Managment', text: 'Description of Project Managment Category', img: 'https://cdn3.iconfinder.com/data/icons/design-and-development-15/256/87-512.png'}
  ];

  constructor() { }

  ngOnInit(): void {

  }



}
