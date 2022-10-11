//getting the mobile menu to make an click event on it
const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

//so clicking the menu conts will cause the mobile menu and the nth child translate to change
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

//add a click event to the menu variable created to display mobile menu
menu.addEventListener('click',mobileMenu);

//show active menu when scrolling , the higlight below is a function
const highMenuList = () => {
    const elem = document.querySelector('.hightlight'); //firstly target the higlight class
    //tragetting the nav menu we wanna put some border under
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const ServicesMenu = document.querySelector('#services-page');
    let scrollPosition = window.scrollY;

    //adds 'highlight' class to my menu items
    //i dont wanna make my highlight show on the mobile menu
    //which is the breakpint of 960px

    if (window.innerWidth > 960 && scrollPosition < 600){
        homeMenu.classList.add('hightlight');
        aboutMenu.classList.remove('hightlight');
        return;
    } else if (window.innerWidth > 960 && scrollPosition < 1400){
        aboutMenu.classList.add('hightlight');
        homeMenu.classList.remove('hightlight');
        ServicesMenu.classList.remove('hightlight');
        return;
    } else if (window.innerWidth > 960 && scrollPosition < 2345){
        ServicesMenu.classList.add('hightlight');
        aboutMenu.classList.remove('hightlight');
        return;
    }

    if ((elem && window.innerWidth < 960 && scrollPosition < 600) || elem){
        elem.classList.remove('hightlight');
    }
};

//then we call the function above based on two conditions
//we are going to add the scroll and click evenet listener
window.addEventListener('scroll', highMenuList);
window.addEventListener('click', highMenuList);

//close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    //we have to get the active css active class
    const menuBars = document.querySelector('.is-active');
    //the condition code below checks if the screen width is less than 768 and the is-active class is true i.e the mobile menu navbar is open
    if (window.innerWidth <= 768 && menuBars){
        //if this is true, then toggle the active class, then close the navmenus
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

//trigger the function above by adding eventlisteners
menuLinks.addEventListener('click', hideMobileMenu);
//also create eventlistener on the logo as well]
navLogo.addEventListener('click', hideMobileMenu);


