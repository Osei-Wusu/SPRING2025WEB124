/*
Author: Dominic Appiah
Date: April 6, 2025
Description: CS 124 Sticky Nav Project
*/
const nav = document.querySelector('#main');
var topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
    nav.classList.add('underline');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
    nav.classList.remove('underline');
  }
}

window.addEventListener('scroll', fixNav);

