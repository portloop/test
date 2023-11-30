document.addEventListener('DOMContentLoaded', () => {
    let btns = document.querySelectorAll('.button'),
        rangeInput = document.querySelector('.slider-progress'),
        amount = document.querySelector('.pb-amount'),
        monthly = false,
        price = document.querySelectorAll('span.amount'),
        discont = document.querySelectorAll('.discount'),
        currency = document.querySelectorAll('.currency'),
        time = document.querySelectorAll('.time');


    // Switch active button
    btns.forEach(item => {
        item.addEventListener('click', (e) => {
            removeClass();
            e.target.classList.add('active');
            if (e.target.classList.contains('month')) {
                monthly = true;
                console.log(monthly)
                discont.forEach(item => {
                    item.style.cssText = 'display: none'
                })
            } else {
                discont.forEach(item => {
                    item.style.cssText = 'display: flex'
                    monthly = false
                })
            }
            changeAmount(); // Вызываем changeAmount() после изменения режима
        })
    });

    // Class "active" removing 
    function removeClass(e) {
        btns.forEach(item => {
            item.classList.remove('active')
        })
    }


    rangeInput.addEventListener('input', () => {
        console.log(rangeInput.value)
        changeAmount()
    })


    function changeAmount () {
        if (rangeInput.value > 20) {
            amount.innerHTML = '$500,001 - $3,000,000';
            if (monthly) {
                price[0].innerHTML = '399'
                price[1].innerHTML = '599'
            } else {
                price[0].innerHTML = '330'
                price[1].innerHTML = '499'
                discont[0].innerHTML = '$399'
                discont[1].innerHTML = '$599'
            }
        }
        if (rangeInput.value < 20) {
            amount.innerHTML = '< $500,000';
            if (monthly) {
                price[0].innerHTML = '99'
                price[1].innerHTML = '149'
            } else {
                price[0].innerHTML = '83'
                price[1].innerHTML = '119'
                discont[0].innerHTML = '$99'
                discont[1].innerHTML = '$149'
            }
        }
        if (rangeInput.value > 45) {
            amount.innerHTML = '$3,000,001 - $10,000,000';
            if (monthly) {
                price[0].innerHTML = '499'
                price[1].innerHTML = '799'
            } else {
                price[0].innerHTML = '415'
                price[1].innerHTML = '664'
                discont[0].innerHTML = '$499'
                discont[1].innerHTML = '$799'
            }
        }
        if (rangeInput.value > 80) {
            currency.forEach(item => {
                item.style.cssText = 'display: flex';
            })
            time.forEach(item => {
                item.style.cssText = 'display: flex';
            })
            amount.innerHTML = '$10,000,001 - $30,000,000';
            if (monthly) {
                price[0].innerHTML = '599'
                price[1].innerHTML = '899'
            } else {
                price[0].innerHTML = '499'
                price[1].innerHTML = '745'
                discont[0].innerHTML = '$599'
                discont[1].innerHTML = '$899'
            }
        }
        if (rangeInput.value > 99) {
            currency.forEach(item => {
                item.style.cssText = 'display: none';
            })
            time.forEach(item => {
                item.style.cssText = 'display: none';
            })
            amount.innerHTML = '> $30,000,001';
            if (monthly) {
                price[0].innerHTML = 'Custom'
                price[1].innerHTML = 'Custom'
            } else {
                price[0].innerHTML = 'Custom'
                price[1].innerHTML = 'Custom'
                discont[0].innerHTML = ''
                discont[1].innerHTML = ''
            }
        }
        // Остальной код...
    }

    changeAmount()
});
