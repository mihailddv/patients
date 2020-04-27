import { disableBodyScroll, avialableBodyScroll } from './body-no-scroll';
import { hideScrollbar, showScrollbar } from './scrollbarWidth';

export function showModals() {
  const body = document.querySelector('body');

  hideScrollbar();
  disableBodyScroll();
  body.classList.add('modal-open');
}

export function closeModals() {
  const body = document.querySelector('body');

  showScrollbar();
  avialableBodyScroll();
  body.classList.remove('modal-open');
}
