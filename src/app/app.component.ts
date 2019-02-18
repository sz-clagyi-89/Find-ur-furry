import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  setFeatureComp: boolean;

  title = 'Dog Book App';

  onSwitchFeatureComp(state: boolean) {
    this.setFeatureComp = state;
  }
}
