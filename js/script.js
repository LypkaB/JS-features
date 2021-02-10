/*<----- Link - http://jsfiddle.net/MxpR6/1/ ----->*/

/*
    function hasScroll(el, direction) {
        direction = (direction === 'vertical') ? 'scrollTop' : 'scrollLeft';

        var result = !! el[direction];

        if (!result) {
            el[direction] = 1;
            result = !!el[direction];
            el[direction] = 0;
        }
        return result;
    }

    alert(hasScroll(document.body, 'vertical'));
    alert(hasScroll(document.body, 'horizontal'));
*/

/*<----- variant №1 ----->*/
/*
    document.addEventListener('DOMContentLoaded', () => {
        const subnav = document.querySelector('#subnav');

        function hasScroll() {
            let result = !!subnav['scrollTop'];

            if (!result) {
                subnav['scrollTop'] = 1;
                result = !!subnav['scrollTop'];
                subnav['scrollLeft'] = 0;
            }
            return result;
        }

        if (hasScroll() === true) {
            subnav.classList = 'subnav-indicator';
        }

        const subnavIndicator = document.querySelector('.subnav-indicator');

        subnav.addEventListener('scroll', () => {
            if (Math.ceil(subnavIndicator.scrollTop + subnavIndicator.clientHeight) >= subnavIndicator.scrollHeight) {
                subnavIndicator.classList.add('subnav-indicator_up');
            } else if (subnavIndicator.scrollTop <= 0) {
                subnavIndicator.classList.remove('subnav-indicator_up');
            }
        })
    })
*/

/*<----- variant №2 ----->*/
/*
    document.addEventListener('DOMContentLoaded', () => {
        const subnav = document.querySelector('#subnav');
        let result = !!subnav['scrollTop'];

        if (!result) {
            subnav['scrollTop'] = 1;
            result = !!subnav['scrollTop'];
            subnav['scrollLeft'] = 0;
        }

        if (result) subnav.classList.add('subnav-indicator');

        const subnavIndicator = document.querySelector('.subnav-indicator');

        subnav.addEventListener('scroll', () => {
            if (Math.ceil(subnavIndicator.scrollTop + subnavIndicator.clientHeight) >= subnavIndicator.scrollHeight) {
                subnavIndicator.classList.add('subnav-indicator_up');
            } else if (subnavIndicator.scrollTop <= 0) {
                subnavIndicator.classList.remove('subnav-indicator_up');
            }
        })
    })
*/

/*<----- variant №3 ----->*/
document.addEventListener('DOMContentLoaded', () => {
    const subnav = document.querySelector('#subnav'),
          subnavIndicator = document.querySelector('.subnav-indicator');
    let result = !!subnav.scrollTop;

    if (!result) {
        subnav.scrollTop = 1;
        result = !!subnav.scrollTop;
        subnav.scrollLeft = 0;
    }

    if (result) subnavIndicator.classList.add('subnav-indicator_visible');

    subnav.addEventListener('scroll', () => {
        if (Math.ceil(subnav.scrollTop + subnav.clientHeight) >= subnav.scrollHeight) {
            subnavIndicator.classList.add('subnav-indicator_up');
        } else if (subnav.scrollTop <= 0) {
            subnavIndicator.classList.remove('subnav-indicator_up');
        }
    })

    subnavIndicator.addEventListener('click', () => {
        if (!subnavIndicator.classList.contains('subnav-indicator_up')) {
            subnav.scrollTo({top: subnav.scrollHeight - subnav.clientHeight, behavior: 'smooth'})
        } else {
            subnav.scrollTo({top: 0, behavior: 'smooth'});
        }
    })
})