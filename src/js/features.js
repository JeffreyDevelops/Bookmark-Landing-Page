"use strict";


// TAB-TEXT-DESKTOP 

let text_1_desktop = document.createElement("section");
text_1_desktop.setAttribute("id", "tab-text_desktop");
text_1_desktop.innerHTML = `<div id="tab-container">
<div class="flex-container">
<div class="tab-grid-container">
  <div class="tab-bg">
  <div><img src="./src/images/illustration-features-tab-1.svg" alt=""></div>
</div>
</div>
</div>

<div class="flex-container tab-text-container">
<h1>Bookmark in one click</h1>
<p>Organize your bookmarks however you like. Our<br> simple drag-and-drop interface 
  gives you complete<br> control over how you manage your favourite sites.</p>
  <button id="more_info">More Info</button>
</div>
</div>`

// TAB-TEXT
let text_1 = document.createElement("section");
text_1.setAttribute("id", "tab-text");
text_1.innerHTML = `<div id="tab-container">
  <div class="tab-grid-container">
    <div class="tab-bg">
    <div><img src="./src/images/illustration-features-tab-1.svg" alt=""></div>
  </div>
  </div>
</div>

<div class="flex-container tab-text-container">
  <h1>Bookmark in one click</h1>
  <p>Organize your bookmarks however you like. Our simple drag-and-drop interface 
    gives you complete control over how you manage your favourite sites.</p>
</div>`;


let text_2 = document.createElement("section");
text_2.setAttribute("id", "tab-text");
text_2.innerHTML = `<section id="tab-text">

<div id="tab-container">
  <div class="tab-grid-container">
    <div class="tab-bg">
    <div><img src="./src/images/illustration-features-tab-2.svg" alt=""></div>
  </div>
  </div>
</div>

<div class="flex-container tab-text-container">
  <h1>Intelligent search</h1>
  <p>Our powerful search feature will help you find saved sites in no time at all. 
    No need to trawl through all of your bookmarks.</p>
</div>

</section>`;


let text_3 = document.createElement("section");
text_3.setAttribute("id", "tab-text");
text_3.innerHTML = `<section id="tab-text">

<div id="tab-container">
  <div class="tab-grid-container">
    <div class="tab-bg">
    <div><img src="./src/images/illustration-features-tab-3.svg" alt=""></div>
  </div>
  </div>
</div>

<div class="flex-container tab-text-container">
  <h1>Share your bookmarks</h1>
  <p>Easily share your bookmarks and collections with others. Create a shareable 
    link that you can send at the click of a button.</p>
</div>

</section>`;


let features = document.querySelector("#features-area-desktop");
let features_2 = document.querySelector("#features-area-mobile");

// Mobile
let header_1 = document.querySelector(".header_1");
let header_2 = document.querySelector(".header_2");
let header_3 = document.querySelector(".header_3");
let active_features_1 = document.querySelector(".active-feature_1");
let active_features_2 = document.createElement("hr");
active_features_2.setAttribute("class", "active-feature_2");
let active_features_3 = document.createElement("hr");
active_features_3.setAttribute("class", "active-feature_3");


// Inputs the tab 1 on reload
features.insertAdjacentElement("afterend", text_1);
features.insertAdjacentElement("afterend", text_1_desktop);


    features_2.addEventListener("click", e => {
    console.log(e);
    if (e.target === header_1) {
        active_features_2.remove();
        active_features_3.remove();
        header_1.insertAdjacentElement("afterend", active_features_1);
    
        text_2.replaceWith(text_1);
        text_3.replaceWith(text_1);
    } 

     


     if (e.target === header_2) {
        header_2.insertAdjacentElement("afterend", active_features_2);
    if (text_1.hasAttribute!== "#tab-text") {
       text_1.replaceWith(text_3);
       text_2.replaceWith(text_3);
    } else {
        console.log("ups");
    }
            
            active_features_1.remove();
            active_features_3.remove();
            
         }  
  

});  


header_3.addEventListener("click", e => {
    let create = function () {
       if (header_3.contains === ".active-feature_3") {
           console.log("yes i have it");
       } else if (header_3.hasAttribute !== ".active-feature_3") {
           header_3.insertAdjacentElement("afterend", active_features_3);
       
       }

       if (text_1.hasAttribute!== "#tab-text") {
       text_1.replaceWith(text_2);
       text_3.replaceWith(text_2);
     } else {
         console.log("ups");
     }
   };
   create();
   active_features_1.remove();
   active_features_2.remove();
}); 



// Desktop
let header_1_desktop = document.querySelector(".header_1_desktop");
let header_2_desktop = document.querySelector(".header_2_desktop");
let header_3_desktop = document.querySelector(".header_3_desktop");
let active_features_1_desktop = document.querySelector(".active-feature_1_desktop");
let active_features_2_desktop = document.createElement("hr");
active_features_2_desktop.setAttribute("class", "active-feature_2_desktop");
let active_features_3_desktop = document.createElement("hr");
active_features_3_desktop.setAttribute("class", "active-feature_3_desktop");


features.addEventListener("click", e => {
  console.log(e);
  if (e.target === header_1_desktop) {
      active_features_2_desktop.remove();
      active_features_3_desktop.remove();
      header_3_desktop.insertAdjacentElement("afterend", active_features_1_desktop);
  
      text_2.replaceWith(text_1_desktop);
      text_3.replaceWith(text_1_desktop);
  } 

   


   if (e.target === header_2_desktop) {
      header_3_desktop.insertAdjacentElement("afterend", active_features_2_desktop);
  if (text_1_desktop.hasAttribute!== "#tab-text") {
     text_1_desktop.replaceWith(text_3);
     text_2.replaceWith(text_3);
  } else {
      console.log("ups");
  }
          
          active_features_1_desktop.remove();
          active_features_3_desktop.remove();
          
       }  


});  


header_3_desktop.addEventListener("click", e => {
  let create = function () {
     if (header_3_desktop.contains === ".active-feature_3_desktop") {
         console.log("yes i have it");
     } else if (header_3_desktop.hasAttribute !== ".active-feature_3_desktop") {
         header_3_desktop.insertAdjacentElement("afterend", active_features_3_desktop);
     
     }

     if (text_1.hasAttribute!== "#tab-text") {
     text_1.replaceWith(text_2);
     text_3.replaceWith(text_2);
   } else {
       console.log("ups");
   }
 };
 create();
 active_features_1_desktop.remove();
 active_features_2_desktop.remove();
}); 


