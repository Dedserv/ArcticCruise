import {Burger} from './burger';
import {StickyHeader} from './sticky-header';

window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    const burger = new Burger();
    burger.init();
    const stickyHeader = new StickyHeader();
    stickyHeader.init();
  });
});
