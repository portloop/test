document.addEventListener('DOMContentLoaded', () => {
setTimeout(() => {
    function validateEmail(sEmail) {
        var filter = /^([\w-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        }
        else {
            return false;
        }
    }

  // Submit email 
let sumbitBtns = document.querySelectorAll('.subscribe-btn');
let inputs = document.querySelectorAll('.sub-input');
let captchaToken = null;

inputs.forEach(item => {
  item.addEventListener('input', (e) => {
    item.style.cssText = 'border: 1px solid #504B5A;';
    $(item.nextElementSibling.nextElementSibling).fadeOut();
  })
})

sumbitBtns.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    let emailInput = target.previousElementSibling;


    let hasError = false;
    if(!validateEmail(emailInput.value)) {
      hasError = true;
      emailInput.style.cssText = 'border: 1px solid red'
      $(target.nextElementSibling).fadeIn();
    }



    if (!hasError) {
      if (captchaToken) {

        console.log('Captcha already success')
      } else {
        // Если токен еще не существует, вызывайте функцию grecaptcha.execute() для верификации капчи
        grecaptcha.execute('6LclUi4nAAAAAKFC0EkXlE-wppApTckgZHJmMido', { action: 'submit' })
        .then(function(token) {
          console.log('captcha success');
          blogCaptcha(token);
        })
        .catch(function(error) {
          console.error('captcha error:', error);
        });
      }
    } else {
      console.log('Captcha not found')
    }



    function blogCaptcha(response) {
      captchaToken = response;
      $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/subscribe/submit-form',
        data: {
            email : emailInput.value

        },
    })
        .done(function (response) {
          $(emailInput).parent().next().css("display", "flex").fadeIn();
          $(emailInput).parent().fadeOut();
        })
        .fail(function (response) {
          $(emailInput).parent().next().css("display", "flex").fadeIn();
          $(emailInput).parent().fadeOut();
        })
    }
    
    window.blogCaptcha = blogCaptcha;

  })
})
}, 2000)

})