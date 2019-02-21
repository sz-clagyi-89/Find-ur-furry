import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Dog } from '../dog.model';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {
  ID: number;
  currentDog: Dog;

  constructor(private route: ActivatedRoute,
              private dogService: DogService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.ID = +params['id'];
        this.currentDog = this.dogService.getDog(this.ID);
        console.log(this.currentDog);
      }
    );
  }

}
