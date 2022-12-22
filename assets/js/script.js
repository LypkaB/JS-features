'use strict';

Array.from(document.querySelectorAll('button.Toggle')).forEach(button => {
    button.addEventListener('click', event => {
        if (button.getAttribute('aria-pressed') === 'true') {
            button.removeAttribute('aria-pressed')
        } else {
            button.setAttribute('aria-pressed', 'true')
        }
    })
})