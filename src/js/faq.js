"use strict";

let arrow_1 = document.querySelector(".arrow-down_1"); 
let arrow_2 = document.querySelector(".arrow-down_2"); 
let arrow_3 = document.querySelector(".arrow-down_3");
let arrow_4 = document.querySelector(".arrow-down_4");
let arrow_test = document.querySelector(".arrow-down > img"); 
let arrow_color = document.querySelector(".arrow-color-change");
let faq_container = document.querySelector(".faq-container");
let faq_inside_items_1 = document.querySelector(".faq-inside-items_1");
let faq_inside_items_2 = document.querySelector(".faq-inside-items_2");
let faq_inside_items_3 = document.querySelector(".faq-inside-items_3");
let faq_inside_items_4 = document.querySelector(".faq-inside-items_4");
// create element 1
let arrow_text_1 = document.createElement("p");
arrow_text_1.setAttribute("class", "arrow-text-1");
arrow_text_1.innerHTML = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>Fusce tincidunt 
justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.<p>`;

// create element 2
let arrow_text_2 = document.createElement("p");
arrow_text_2.setAttribute("class", "arrow-text-2");
arrow_text_2.innerHTML = `<p>Vivamus luctus eros aliquet convallis ultricies.<br> Mauris augue massa, ultricies non ligula. 
Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. <br>Mauris augue massa, 
ultricies non ligula. Suspendisse imperdie tVivamus <br>luctus eros aliquet convallis ultricies. 
Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>`;

// create element 3
let arrow_text_3 = document.createElement("p");
arrow_text_3.setAttribute("class", "arrow-text-3");
arrow_text_3.innerHTML = `<p>Sed consectetur quam id neque fermentum accumsan. <br>Praesent luctus vestibulum dolor, ut condimentum 
urna vulputate eget.<br> Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
sollicitudin ex et ultricies bibendum.<p>`;

// create element 4
let arrow_text_4 = document.createElement("p");
arrow_text_4.setAttribute("class", "arrow-text-4");
arrow_text_4.innerHTML = `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. <br>Aliquam 
vitae neque eget nisl gravida pellentesque non ut velit.`;



// Arrow_1

arrow_1.addEventListener("click", e => {
  
        arrow_1.classList.toggle("arrow-color-change");
        faq_inside_items_1.insertAdjacentElement("afterend", arrow_text_1);
    
    
    if (arrow_text_1.style.display === "block") {
      arrow_text_1.style.display = "none";
    } else {
     arrow_text_1.style.display = "block";
    }


});


// Arrow_2

arrow_2.addEventListener("click", e => {
  
    arrow_2.classList.toggle("arrow-color-change");
    faq_inside_items_2.insertAdjacentElement("afterend", arrow_text_2);


if (arrow_text_2.style.display === "block") {
  arrow_text_2.style.display = "none";
} else {
 arrow_text_2.style.display = "block";
}


});

// Arrow_3
arrow_3.addEventListener("click", e => {
  
    arrow_3.classList.toggle("arrow-color-change");
    faq_inside_items_3.insertAdjacentElement("afterend", arrow_text_3);


if (arrow_text_3.style.display === "block") {
  arrow_text_3.style.display = "none";
} else {
 arrow_text_3.style.display = "block";
}


});


// Arrow_4
arrow_4.addEventListener("click", e => {
  
    arrow_4.classList.toggle("arrow-color-change");
    faq_inside_items_4.insertAdjacentElement("afterend", arrow_text_4);


if (arrow_text_4.style.display === "block") {
  arrow_text_4.style.display = "none";
} else {
 arrow_text_4.style.display = "block";
}


});


