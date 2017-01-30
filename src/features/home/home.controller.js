import pic1 from './img/portfolio/thumbnails/1.jpg';
import pic2 from './img/portfolio/thumbnails/2.jpg';
import pic3 from './img/portfolio/thumbnails/3.jpg';
import pic4 from './img/portfolio/thumbnails/4.jpg';
import pic5 from './img/portfolio/thumbnails/5.jpg';
import pic6 from './img/portfolio/thumbnails/6.jpg';

export default class HomeController {
  constructor() {
    this.name = 'World';
    this.pic = [pic1,pic2,pic3,pic4,pic5,pic6];
  }

  changeName() {
    this.name = 'angular-tips';
  }

}