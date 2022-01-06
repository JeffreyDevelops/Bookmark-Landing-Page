"use strict";
let features = document.querySelector("#features-area");
let features1 = document.querySelector(".header_2")
let span_target_2 = document.querySelector(".header_2");
let span_target_3 = document.querySelector(".header_3");
// ACTIVE CONTAINER 
let active_container_1 = document.querySelector(".active-feature-container-1");
let active_container_2 = document.querySelector(".active-feature-container-2");
let active_container_2_test = document.querySelector(".active-feature-container-2 > .active-feature_2");
let active_container_3 = document.querySelector(".active-feature-container-3");
// =============================================================================
let check_active_feature = document.querySelector(".active-feature-container-1 > .active-feature");
let remove_active = document.querySelector(".active-feature_3");
let active_features_1 = document.querySelector(".active-feature_1");
let active_features_2 = document.createElement("hr");
active_features_2.setAttribute("class", "active-feature_2");

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

// Inputs the tab 1 on reload
features.insertAdjacentElement("afterend", text_1);

// TAB-TEXT-REMOVE
let text_remove_1 = document.querySelector("#tab-text");

let active_features_3 = document.createElement("hr");
active_features_3.setAttribute("class", "active-feature_3");


    features.addEventListener("click", e => {
    console.log(e);
    if (e.target === active_container_1) {
        active_features_2.remove();
        active_features_3.remove();
        active_container_1.insertAdjacentElement("afterbegin", active_features_1);
    
        text_2.replaceWith(text_1);
        text_3.replaceWith(text_1);
    } 

     


     if (e.target === span_target_3) {
        active_container_3.insertAdjacentElement("afterbegin", active_features_3);
    if (text_1.hasAttribute!== "#tab-text") {
       text_1.replaceWith(text_3);
       text_2.replaceWith(text_3);
    } else {
        console.log("ups");
    }
            
            active_features_1.remove();
            active_features_2.remove();
            
         }  
  

});  


features1.addEventListener("click", e => {
    let create = function () {
       if (active_container_2.contains === ".active-feature_2") {
           console.log("yes i have it");
       } else if (active_container_2.hasAttribute !== ".active-feature_2") {
           active_container_2.insertAdjacentElement("afterbegin", active_features_2);
       
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
   active_features_3.remove();
}); 


