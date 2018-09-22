import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Joke } from '../Joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css'],
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();
  constructor() { }

  ngOnInit() {
  }

  createJoke(setup: string, punchline: string){
    this.jokeCreated.emit(new Joke(setup, punchline))
  }

}
