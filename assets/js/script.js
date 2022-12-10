'use strict';

const descriptionTextFunctions = (function () {
    const getElements = () => {
        const dtTable = document.querySelector('.description_text');
        const dtMax = document.querySelector('.description_text-maximize-icon');
        const dtMin = document.querySelector('.description_text-minimize-icon');
        return [dtTable, dtMax, dtMin];
    }

    const expand = () => {
        const [dtTable, dtMax, dtMin] = getElements();
        dtMax.addEventListener('click', function () {
            dtTable.classList.remove('description_collapse');
            dtMax.classList.add('icon-hidden');
            dtMin.classList.remove('icon-hidden');
        })
    }

    const collapse = () => {
        const [dtTable, dtMax, dtMin] = getElements();
    }

    return {
        expand,
        collapse
    }
}());