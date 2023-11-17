 let submitEmail = document.querySelector('#quick-email-submit'),
    qemail = document.querySelector('#quick-email');

function validateEmail(sEmail) {
    var filter = /^([\w-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}

let captchaTokenQM = null;

qemail.addEventListener('input', () => {
    let qemailError = qemail.nextElementSibling;
    qemail.classList.remove('error')
    $(qemailError).fadeOut();
    })

submitEmail.addEventListener('click', (event) => {
    event.preventDefault();
    let hasError = false; 

    
    if(!qemail.value || !validateEmail(qemail.value)) {
      hasError = true;  
      let qemailError = qemail.nextElementSibling;
      qemail.classList.add('error')
      $(qemailError).fadeIn();
    }

    


    if (!hasError) {
      if (captchaTokenQM) {

        console.log('Captcha already success')
      } else {
        // Если токен еще не существует, вызывайте функцию grecaptcha.execute() для верификации капчи
        grecaptcha.execute('6Lc5LS4nAAAAANoJndX4wXZbHa8hpWVIj9_YQjTJ', { action: 'submit' })
        .then(function(token) {
          console.log('captcha success');
          quickEmailCaptcha(token);
        })
        .catch(function(error) {
          console.error('captcha error:', error);
        });
      }
    } else {
      console.log('Captcha not found')
    }



    function quickEmailCaptcha(response) {
      captchaTokenQM = response;
      $.ajax({
        method: 'POST', 
        url: 'http://localhost:3000/submit-mainPageSimple-form/submit-form',
        data: { email : qemail.value },
      })
      .done(function (response) {
        $('.focus-input').fadeOut();
        $('.focus-success').css('display', 'flex');
        768 < document.documentElement.clientWidth ? dataLayer.push({ event: "click", itemName: `email_submission_section1-desktop` }) : dataLayer.push({ event: "click", itemName: `email_submission_section1-mobile` });
      })
      .fail(function (response) {
        $('.focus-input').fadeOut();
        $('.focus-success').css('display', 'flex');
        768 < document.documentElement.clientWidth ? dataLayer.push({ event: "click", itemName: `email_submission_section1-desktop` }) : dataLayer.push({ event: "click", itemName: `email_submission_section1-mobile` });

      })
    }
    
    window.quickEmailCaptcha = quickEmailCaptcha;
});

