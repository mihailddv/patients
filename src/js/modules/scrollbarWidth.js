export function hideScrollbar() {
  const body = document.querySelector('body')
  const scrollBarWidth = window.innerWidth - document.body.offsetWidth;

  body.style.marginRight = `${scrollBarWidth}px`
}

export function showScrollbar() {
  const body = document.querySelector('body')

  body.style.marginRight = 0
}