import { Component } from '@angular/core';
import { DogService } from './dog.service';

@Component({
    selector: 'app-dog',
    templateUrl: './dog.component.html',
    styleUrls: ['./dog.component.css'],
    providers: [ DogService ]
})
export class DogComponent { }
