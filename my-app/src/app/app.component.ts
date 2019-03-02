import { Component, OnInit } from '@angular/core';
const log = console.log;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent implements OnInit {

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


  //
  // init
  //
  ngOnInit() {
    // just
    setInterval(() => this.title++, 1000)
    // gravity
    setInterval(this.gravity.bind(this), 100)
    // keyboard
    window.addEventListener('keydown', this.keyboard.bind(this))
  }

  gravity() {
    this.refresh_history()

    // change position !!!
    this.char.y++

    // get kit
    let rest, place;
    ({ place, ...rest } = this.getKit())

    if (place != 0) this.go_back();
  }

  keyboard(e) {
    // get kit
    let rest, place, under_place;
    ({ under_place, ...rest } = this.getKit())

    this.refresh_history()

    // change position !!!
    if (e.key == 'ArrowRight') this.char.x++;
    if (e.key == 'ArrowLeft') this.char.x--;
    if (e.key == 'ArrowUp' && under_place != 0) this.char.y -= 4;

    // get kit
    ({ place, ...rest } = this.getKit())

    if (place != 0) this.go_back();
  };

  // get kit
  //
  getKit() {

    let under_place = 0;  // but be able to jump when whole

    try{
      under_place = this.game_map[this.char.y+1][this.char.x]
      log(this.game_map[this.char.y+1][this.char.x], '<<<< 2')
    }catch(err){
      log('error because we go beyond the array!!!')
    }

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
