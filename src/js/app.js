"use strict";

let body = document.querySelector("body");

// HAMBURGER SECTION

let hamburger_section = document.createElement("div");
hamburger_section.setAttribute("id", "myNav");
hamburger_section.setAttribute("class", "overlay");
hamburger_section.innerHTML = ` <div class="flex-container navbar">
<img class="bookmark-nav-logo" src="./src/images/logo-bookmark-white-mobile.svg" alt="">
<div><img class="close-logo-nav" onclick="closeNav()" src="./src/images/icon-close.svg" alt=""></div>
</div>
<div class="overlay-content">
<hr class="mobile-nav-line">
<div class="flex-nav">
<a href="#">FEATURES</a>
</div>
<hr class="mobile-nav-line">
<div class="flex-nav">
<a href="#">PRICING</a>
</div>
<hr class="mobile-nav-line">
<div class="flex-nav">
<a href="#">CONTACT</a>
</div>
<hr class="mobile-nav-line">
<span>LOGIN</span>
<div class="icon-items-2">
  <img src="./src/images/icon-facebook.svg" alt="">
  <img src="./src/images/icon-twitter.svg" alt="">
</div>
</div>`;
body.insertAdjacentElement("beforeend", hamburger_section);

// NAVBAR SECTION

let navbar_section = document.createElement("section");
navbar_section.setAttribute("id", "boomark-nav");
navbar_section.innerHTML = `<nav class="flex-container navbar">
<img class="image-sizing" src="src/images/logo-bookmark.svg" alt="bookmark-logo">
<div onclick="openNav()" id="hamburger"><img src="./src/images/icon-hamburger.svg" alt="mobile-hamburger"></div>
</nav>`;
hamburger_section.insertAdjacentElement("afterend", navbar_section);


// BIG-LOGO SECTION

let big_logo_section = document.createElement("section");
big_logo_section.setAttribute("id", "big-logo");
big_logo_section.innerHTML = `<div id="logo-under-navbar">
<div class="grid-container under-navbar-container">
  <div class="logo-under-navbar-bg"></div>
  <div><img src="./src/images/illustration-hero.svg" alt="logo-under-navbar"></div>
</div>
</div>`;
navbar_section.insertAdjacentElement("afterend", big_logo_section);


// BOOKMARK SECTION
let bookmark_section = document.createElement("section");
bookmark_section.setAttribute("id", "bookmark-manager");
bookmark_section.innerHTML = `<div class="flex-container book-manager-container">
    <h1>A Simple Bookmark <br>Manager</h1>
    <p>A clean and simple interface to organize your favourite websites. Open a new 
      browser tab and see your sites load instantly. Try it for free.</p>
    <div class="btn btn-items">
      <button class="btn_1">Get it on Chrome</button>
      <button class="btn_2">Get it on Firefox</button>
    </div>
</div>`;
big_logo_section.insertAdjacentElement("afterend", bookmark_section);


// FEATURE SECTION

let feature_section = document.createElement("section");
feature_section.setAttribute("id", "features-area");
feature_section.innerHTML = `<div class="flex-container features-container">
<h1>Features</h1>
<p>Our aim is to make it quick and easy for you to access your favourite websites. 
  Your bookmarks sync between your devices so you can access them on the go.</p>
 
    <hr class="features-line">
    <span class="header_1">Simple Bookmarking</span>
    <div class="active-feature-container-1"> 
    <hr class="active-feature_1">
    <hr class="features-line_margin"></div>
    <span class="header_2">Speedy Searching</span>
    <div class="active-feature-container-2">
    </div>
    <hr class="features-line">
    <span class="header_3">Easy Sharing</span>
    <div class="active-feature-container-3">
    </div>
    <hr class="features-line">
  
</div>`;

bookmark_section.insertAdjacentElement("afterend", feature_section);


// DOWNLOAD EXTENSION SECTION 

let extension_section = document.createElement("section");
extension_section.setAttribute("id", "download-extension");
extension_section.innerHTML = `<div class="flex-container extension-container">
<h1>Download the extension</h1>
<p>We’ve got more browsers in the pipeline. Please do let us know if you’ve 
  got a favourite you’d like us to prioritize.</p>
</div>

<!-- Extensions -->

<div class="flex-exention-container">
<!-- Chrome-Extension -->
<div class="extension-bg">
  <img src="./src/images/logo-chrome.svg" alt="chrome-logo">
  <div><h1 class="extension-header"> Add to Chrome</h1>
  <p class="extension-text">Minimum version 62</p></div>
  <div class='dotted-spaced'>
    <br></div>
<button class="extension-button">Add & Install Extension</button>
</div>
<!-- Firefox-Extension -->
<div class="extension-bg">
<img src="./src/images/logo-firefox.svg" alt="chrome-logo">
<div><h1 class="extension-header">Add to Firefox</h1>
<p class="extension-text">Minimum version 55</p></div>
<div class='dotted-spaced'>
  <br></div>
<button class="extension-button">Add & Install Extension</button>
</div>
<!-- Opera-Extension -->
<div class="extension-bg">
<img src="./src/images/logo-opera.svg" alt="chrome-logo">
<div><h1 class="extension-header">Add to Opera</h1>
<p class="extension-text">Minimum version 46</p></div>
<div class='dotted-spaced'>
<br></div>
<button class="extension-button">Add & Install Extension</button>
</div>

</div>`;

feature_section.insertAdjacentElement("afterend", extension_section);


// FAQ SECTION

let faq_section = document.createElement("section");
faq_section.setAttribute("id", "faq-section");
faq_section.innerHTML = `<section id="faq-section">

<div class="faq-container">
    <h1 class="faq-headline">Frequently Asked Questions</h1>
    <p>Here are some of our FAQs. If you have any other questions you’d like 
      answered please feel free to email us.</p>
</div>

<div class="faq-container">
      <!-- Question-1 -->
<div class="faq-items"> 
   <div class="faq">
      <div class="faq-inside-items faq-inside-items_1">
      <div><span class="faq_header_1">What is Bookmark?</span></div>
      <div class="arrow-down_1"><img src="./src/images/icon-arrow.svg" alt=""></div></div>
      <!-- <p class="arrow-text_1" style="margin-top: 2rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p> -->
      <hr class="faq-line">
   </div>
        <!-- Question-2 -->
        <div class="faq">
          <div class="faq-inside-items faq-inside-items_2">
          <div><span class="faq_header_1">How can I request a new browser?</span></div>
          <div class="arrow-down_2"><img src="./src/images/icon-arrow.svg" alt=""></div></div>
          <hr class="faq-line">
       </div>
        <!-- Question 3 -->
        <div class="faq">
          <div class="faq-inside-items faq-inside-items_3">
          <div><span class="faq_header_1">Is there a mobile app?</span></div>
          <div class="arrow-down_3"><img src="./src/images/icon-arrow.svg" alt=""></div></div>
          <hr class="faq-line">
       </div>
        <!-- Question 4 -->
        <div class="faq">
          <div class="faq-inside-items faq-inside-items_4">
          <div><span class="faq_header_1">What about other Chromium browsers?</span></div>
          <div class="arrow-down_4"><img src="./src/images/icon-arrow.svg" alt=""></div></div>
          <hr class="faq-line">
       </div>
          
</div>
<button id="more_info">More Info</button>

</div>`;

extension_section.insertAdjacentElement("afterend", faq_section);


// EMAIL-LIST 

let email_section = document.createElement("section");
email_section.setAttribute("id", "email-list");
email_section.innerHTML = `<div class="flex-container email-container">
<span>35,000+ ALREADY JOINED</span>
<h1>Stay up-to-date with what we’re doing</h1>
<div id="email-form-bg">
<form id="email-form" action="index.html" method="get">
  <div class="flex-container email-form-input">
  <input required class="email-input" type="email" name="email" oninvalid="invalid(this)" placeholder="Enter your email adress" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$">
</div>
  </div>
  <button type="submit" class="email-button" >Contact Us</button>
</form>
</div>`;


faq_section.insertAdjacentElement("afterend", email_section);


// FOOTER 

let footer_section = document.createElement("footer");
footer_section.setAttribute("id", "bookmark-footer");
footer_section.innerHTML = `<div class="grid-footer">
<img src="./src/images/logo-bookmark-white.svg" alt="">
<span>FEATURES</span>
<span>PRICING</span>
<span>CONTACT</span>
<div class="icon-items">
  <img src="./src/images/icon-facebook.svg" alt="">
  <img src="./src/images/icon-twitter.svg" alt="">
</div>
</div>`;

email_section.insertAdjacentElement("afterend", footer_section);
