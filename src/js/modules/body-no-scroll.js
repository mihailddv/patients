export function disableBodyScroll() {
  const body = document.querySelector('body');

  body.classList.add('body--no-scroll', 'modal-open');
}

export function avialableBodyScroll() {
  const body = document.querySelector('body');

  body.classList.remove('body--no-scroll', 'modal-open');
}
