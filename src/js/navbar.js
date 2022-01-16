"use strict";


function openNav() {
    document.getElementById("myNav").style.width = "100%";
    text_1.remove();
    feature_section.remove();
    extension_section.remove();
    faq_section.remove();
    email_section.remove();
    footer_section.remove();
    document.querySelector(".btn-items").remove();
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

