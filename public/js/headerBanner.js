document.addEventListener("DOMContentLoaded", () => {
    let headerBannerClose = document.querySelector('.hb-close'),
    headerBanner = document.querySelector('.header-banner'),
    header = document.querySelector('header'),
    point = document.querySelector('#jak'),
    container = document.querySelector('.lead-section .lead-section-container');

    


headerBannerClose.addEventListener('click', (event) => {
  headerBanner.style.cssText = 'display: none';
  header.style.cssText = 'padding-top: 15px;'
  if(window.innerWidth > 800) {
    point.style.cssText = `top: calc(${getComputedStyle(point).top} + 50px)`
  } else {
    point.style.cssText = `top: calc(${getComputedStyle(point).top} + 100px)`
  }

  if(window.innerWidth < 1024) {
    container.style.cssText = 'padding-top: 0px'
  }
})
})