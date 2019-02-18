import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../dog.model';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  dogs: Dog[];

  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.dogs = this.dogService.getDogs();
  }

}
