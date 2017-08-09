import {Component, OnInit, OnDestroy} from '@angular/core';
import {CarouselPane, CAROUSEL_PANES} from './carousel.panes';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  carouselPanes: CarouselPane[] = CAROUSEL_PANES;
  currentPane: CarouselPane;
  paneIndex: number;
  backgroundImage: string;
  timer;
  constructor() {
  }

  ngOnInit() {
    this.setPane(0);
    this.startTimer();
  }

  ngOnDestroy() {
    this.resetTimer();
  }

  resetTimer() {
    clearTimeout(this.timer);
  }

  startTimer() {
    this.timer = setTimeout(() => {
      this.nextSlide();
      this.startTimer();
    }, 9500);
  }

  nextSlide() {
    this.paneIndex += 1;
    if (this.paneIndex >= this.carouselPanes.length) {
      this.paneIndex = 0;
    }
    this.setPane(this.paneIndex);
  }

  setSlide(paneIndex: number) {
    this.setPane(paneIndex);
    this.resetTimer();
    this.startTimer();
  }

  setPane(paneIndex: number) {
    this.currentPane = this.carouselPanes[paneIndex];
    this.paneIndex = paneIndex;
    this.backgroundImage = ['url(', this.currentPane.image, ')'].join('');
  }

}
