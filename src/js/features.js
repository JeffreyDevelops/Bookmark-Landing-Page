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


let active_features_3 = document.createElement("hr");
active_features_3.setAttribute("class", "active-feature_3");


    features.addEventListener("click", e => {
    console.log(e);
    if (e.target === active_container_1) {
        active_features_2.remove();
        active_features_3.remove();
        active_container_1.insertAdjacentElement("afterbegin", active_features_1);
        
     }

    
    if (e.target === span_target_3) {
        active_container_3.insertAdjacentElement("afterbegin", active_features_3);
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
   };
   create();
   active_features_1.remove();
   active_features_3.remove();
}); 


