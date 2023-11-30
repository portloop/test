document.addEventListener('DOMContentLoaded', (e) => {
    let shakeElement = document.querySelector('#demo-floater');
    setInterval(() => {
        shakeElement.classList.add('shake-animation');
        setTimeout(() => {
          shakeElement.classList.remove('shake-animation');
        }, 2500); // Длительность анимации в миллисекундах
      }, 5000); // Каждые 5 секунд

})