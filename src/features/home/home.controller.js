import thumb1 from './img/portfolio/thumbnails/1.jpg';
import thumb2 from './img/portfolio/thumbnails/2.jpg';
import thumb3 from './img/portfolio/thumbnails/3.jpg';
import thumb4 from './img/portfolio/thumbnails/4.jpg';
import thumb5 from './img/portfolio/thumbnails/5.jpg';
import thumb6 from './img/portfolio/thumbnails/6.jpg';

import fSize1 from './img/portfolio/fullsize/1.jpg';
import fSize2 from './img/portfolio/fullsize/2.jpg';
import fSize3 from './img/portfolio/fullsize/3.jpg';
import fSize4 from './img/portfolio/fullsize/4.jpg';
import fSize5 from './img/portfolio/fullsize/5.jpg';
import fSize6 from './img/portfolio/fullsize/6.jpg';

import designBehavior from './designBehavior';


export default class HomeController {
  constructor() {
    this.imgThumb = [thumb1,thumb2,thumb3,thumb4,thumb5,thumb6];
    this.imgFSize = [fSize1,fSize2,fSize3,fSize4,fSize5,fSize6];
    designBehavior(); 
  }


}