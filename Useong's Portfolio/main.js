'use strict';

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
console.log(navbarHeight)

document.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }
    else {
        navbar.classList.remove('navbar--dark');
    }
});

// handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link === null) {
        return;
    }
    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({behavior: 'smooth'});
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
    selectNavItem(target);
});

// contact me button
const HomeContactBtn = document.querySelector('.home__contact');
HomeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact')
});

// scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
    selectNavItem(navItems[sectionIds.indexOf(selector)]);
}

// 1. 모든 섹션 요소들과 아이템을 가지고 온다.
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

const sectionIds = [
    "#home",
    "#about",
    "#testimonials",
    "#contact",
];

const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => 
    document.querySelector(`[data-link="${id}"]`)
);

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
}

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];
function selectNavItem(selected) { 
    selectedNavItem.classList.remove('active');
    selectedNavItem = selected;
    selectedNavItem.classList.add('active');
}

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        // 엔트리를 빠져 나갈 때
        if (!entry.isIntersecting && entry.intersectionRatio > 0) {
            const index = sectionIds.indexOf(`#${entry.target.id}`);
            // 스크롤링이 아래로 되어서 페이지가 올라옴
            if (entry.boundingClientRect.y < 0) { 
                selectedNavIndex = index + 1;
            } else {
                selectedNavIndex = index - 1;
            }
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

window.addEventListener('wheel', () => {
    if (window.scrollY === 0) { 
        selectedNavIndex = 0;
    } else if (Math.round(window.scrollY + window.innerHeight) >= 
    document.body.clientHeight) {
        selectedNavIndex = navItems.length - 1;
    }
    selectNavItem(navItems[selectedNavIndex]);    
})
