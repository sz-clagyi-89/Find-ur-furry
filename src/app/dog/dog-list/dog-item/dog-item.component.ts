import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../../dog.model';

@Component({
  selector: 'app-dog-item',
  templateUrl: './dog-item.component.html',
  styleUrls: ['./dog-item.component.css']
})
export class DogItemComponent implements OnInit {
  @Input() dogItem: Dog;

  constructor() { }

  ngOnInit() {

  }

}
