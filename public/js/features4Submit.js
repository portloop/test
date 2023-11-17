document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('#sendButton'),
    qemail = document.querySelector('#quick-email');
    let qemailError = qemail.nextElementSibling;
    let container = document.querySelector('.ss-container'),
        sucContainer = document.querySelector('.lead-form-success-submit')
  
  
        function validateEmail(sEmail) {
            var filter = /^([\w-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            if (filter.test(sEmail)) {
                return true;
            }
            else {
                return false;
            }
        }
        
  
        qemail.addEventListener('input', (e) => {
            qemail.classList.remove('error')
            $(qemailError).fadeOut();
  
        })
  
        btn.addEventListener('click', (e) => {
            event.preventDefault();
            let hasError = false; 
        
            
            if(!qemail.value || !validateEmail(qemail.value)) {
              hasError = true;  
             
              qemail.classList.add('error')
              $(qemailError).fadeIn();
            }
        
            
        
        
            if (!hasError) {
        
                $.ajax({
                    method: 'POST', 
                    url: 'http://localhost:3000/smart-alerts-and-insights/submit-form',
                    data: { email : qemail.value },
                  })
                  .done(function (response) {
                    $('.focus-input').fadeOut();
                    $(container).fadeOut();
                    $(sucContainer).fadeIn();
                    $('.focus-success').css('display', 'flex');
                  })
                  .fail(function (response) {
                    $('.focus-input').fadeOut();
                    $('.focus-success').css('display', 'flex');
                    $(container).fadeOut();
                    $(sucContainer).fadeIn();
            
                  })
              }
        
        
        
            // function quickEmailCaptcha(response) {
            //   captchaTokenQM = response;
             
            // }
            
        })
  })