"use strict";
 let form = document.querySelector("#email-form");
 let error_text = document.querySelector(".email-form-input");
 let error_icon = document.querySelector(".email-input");
 let form_bg = document.querySelector("#email-form-bg");
 let submit = document.querySelector(".email-button")

  let email_text = document.createElement("p");
  email_text.setAttribute("class", "email-error-text");
  email_text.textContent = "Whoops, make sure it's an email";


function invalid() {
    console.log("works");
    error_text.insertAdjacentElement("afterend", email_text);
    form_bg.style.backgroundColor = "hsl(0, 94%, 66%)";
    console.log(invalid);
    error_icon.style.backgroundSize = "16px";
    return false; // Prevent page refresh
 }



