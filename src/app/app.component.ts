import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA7iTulICXJyse3Sx-LE9d7eXVyFBawxq8',
      authDomain: 'ng-recipe-book-f4f36.firebaseapp.com',
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
