import { Component, OnInit } from '@angular/core';
const log = console.log;


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }

  title = 0;

  game_map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
  ]

  char = {
    x: 3,
    y: 7,
    history: {
      x: 3,
      y: 7
    }
  }

  ngOnInit() {
        // just
        setInterval(() => this.title++, 1000)
        // gravity
        setInterval(this.gravity.bind(this), 100)
        // keyboard
        window.addEventListener('keydown', this.keyboard.bind(this))
  }
  
  // gravity
  //
  gravity() {
    this.go('down');
  }

  // check solid
  //
  check_solid() {
    let { place, ...rest } = this.getKit(); // get kit
    if (place != 0) this.go_back();
  }

  // keyboard
  //
  keyboard(e) {
    let { place, under_place, ...rest } = this.getKit(); // get kit
    // change position !!!
    e.key == 'ArrowRight' ? this.go('right') :
      e.key == 'ArrowLeft' ? this.go('left') :
        e.key == 'ArrowUp' && under_place != 0 ? this.go('jump') : '';
  };

  // go
  //
  go(type) {
    this.refresh_history();
    type == 'right' ? this.char.x++ :
      type == 'left' ? this.char.x-- :
        type == 'down' ? this.char.y++ :
          type == 'jump' ? this.char.y -= 4 : '';
    this.check_solid();
  }

  // get kit
  //
  getKit() {
    let under_place = 0;  // but be able to jump when whole
    
    if (this.char.y < 9) // is not bottom
      under_place = this.game_map[this.char.y + 1][this.char.x];
    return {
      place: this.game_map[this.char.y][this.char.x],
      under_place
    }
  }

  // go back
  //
  go_back() {
    this.char.x = this.char.history.x
    this.char.y = this.char.history.y
  }

  // refresh history
  //
  refresh_history() {
    this.char.history.x = this.char.x
    this.char.history.y = this.char.y
  }

  // reset()
  //
  reset() {
    log('I am reset()');
    this.title = 0;
  }


}
