import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../card/card.component';
import { MainComponent } from '../layouts/main/main.component';

import {ServiceService} from '../service.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})

export class AddCategoryComponent implements OnInit {
  @Input() card: Card;
  nameControl: FormControl;
  x: string;

  constructor(public share: ServiceService){
    this.share.title = 'Add category';
    share.icon = 'arrow_back';
  }





  ngOnInit() {
    this.nameControl = new FormControl('Some language or tech');
    // this.nameControl.valueChanges.subscribe((value) => cards.push(value));
    this.nameControl.statusChanges.subscribe((status) => console.log(status));

  }
  addCard() {
    console.log(this.nameControl.value);

  }
}
