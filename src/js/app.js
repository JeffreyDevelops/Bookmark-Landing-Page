"use strict";
let body = document.querySelector("body");
let hamburger_section = document.createElement("div");
hamburger_section.setAttribute("id", "myNav");
hamburger_section.setAttribute("class", "overlay");
hamburger_section.innerHTML = `<div class="flex-container navbar-mobile">
<img class="bookmark-nav-logo" src="./src/images/logo-bookmark-white-mobile.svg" alt="">
<div><img class="close-logo-nav" onclick="closeNav()" src="./src/images/icon-close.svg" alt=""></div>
</div>
<div class="overlay-content">
<hr class="mobile-nav-line">
<div class="flex-nav">
<a onclick="closeNav()" href="#features-area-mobile">FEATURES</a>
</div>
<hr class="mobile-nav-line">
<div class="flex-nav">
<a href="#">PRICING</a>
</div>
<hr class="mobile-nav-line">
<div class="flex-nav">
<a onclick="closeNav()" href="#email-list">CONTACT</a>
</div>
<hr class="mobile-nav-line">
<span>LOGIN</span>
<div class="icon-items-2">
<img src="./src/images/icon-facebook.svg" alt="">
<img src="./src/images/icon-twitter.svg" alt="">
</div>
</div> `;
body.insertAdjacentElement("beforeend", hamburger_section);