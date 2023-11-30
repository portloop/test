document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll to from on click lead button
  const buttons = document.querySelectorAll('.lead-btn'),
    leadForm = document.querySelector('footer');
  let scrollToForm = document.querySelector('#lead-sec')


  buttons.forEach((item => {
    item.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('send-data')) {
        e.preventDefault();
      } else {
        // scrollToForm.scrollIntoView({ block: "start", behavior: "smooth" });
        window.location.href = 'https://app.octup.com/Signup'
      }
    })
  }))

  // Burger Menu
  const burger = document.querySelector('.header-mobile-menu'),
    burgerMenuContainer = document.querySelector('.mobile-header-menu-container'),
    burgerClose = document.querySelector('.mobile-menu-close'),
    body = document.querySelector('body');


    let listButton = document.querySelectorAll('.m-dropdown-title');


    listButton.forEach(item => {
      item.addEventListener('click', (e) => {
        let block = e.target.nextElementSibling
        let arrow = e.target.children;
        block.classList.toggle('active-list')
        arrow.classList.toggle('rotate-arrow')
    })
    })
    listButton

  burger.addEventListener('click', () => {
    burgerMenuContainer.classList.add('mobile-active');
    body.style.overflow = 'hidden';
  });

  burgerMenuContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('mobile-header-menu-container') || e.target.classList.contains('mobile-menu-close') || e.target.tagName == 'A' || e.target.classList.contains('lead-btn')) {
      burgerMenuContainer.classList.remove('mobile-active');
      body.style.overflow = 'auto';
    };
  });

});

function submitDataLayer(event) {
  let target = event.target,
      action = target.getAttribute('data-dlAction');
      768 < document.documentElement.clientWidth ? dataLayer.push({ event: "click", itemName: `${action}-desktop` }) : dataLayer.push({ event: "click", itemName: `${action}-mobile` });
}