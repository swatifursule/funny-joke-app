import { Component } from '@angular/core';
import {Joke} from './Joke'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'funny-joke-app';
  joke: Joke = new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"
}
