const btntOpen = document.querySelector('.btnOpen');
const popupbg = document.querySelector('.popupbg');
const btnClosed = document.querySelector('.btnClosed');
const goup = document.querySelector('.goup');

goup.addEventListener('click', gotop);
window.addEventListener('scroll', tracker);

function tracker() {
    const offset = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if(offset > coords) {
       goup.classList.add('active');
    }else {
        goup.classList.remove('active');
    }
};

function gotop() {
    if(window.pageYOffset > 0) {
        window.scrollBy(0, -77);
        setTimeout(gotop, 0); 
    }
};

btntOpen.addEventListener('click', () => {
    popupbg.classList.add('active');
    document.querySelector('html').classList.add('noscroll');
});

btnClosed.addEventListener('click', () => {
    popupbg.classList.remove('active');
    document.querySelector('html').classList.remove('noscroll');
});


const callback = function(entries, observer) {
             entries.forEach(entri => {
                if(entri.isIntersecting) {
                    entri.target.classList.add('active');
                }
             })
};

let observer = new IntersectionObserver(callback);

let targets = document.querySelectorAll('.anim');

targets.forEach(targe => {
    observer.observe(targe);
});




