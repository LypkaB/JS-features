'use strict';

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('table').addEventListener('change', ({ target: t }) => {
        t.closest('tr').querySelectorAll('input[type="radio"]').forEach(n => n.checked = n === t);
    });
})