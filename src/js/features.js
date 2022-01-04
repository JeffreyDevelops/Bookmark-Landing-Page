"use strict";
let features = document.querySelector("#features-area");
let span_target_2 = document.querySelector(".header_2");
let span_target_3 = document.querySelector(".header_3");
let active_feature_1 = document.querySelector(".active-feature-container-1");
let active_feature_2 = document.querySelector(".active-feature-container-2");
let active_feature_3 = document.querySelector(".active-feature-container-3");
let check_active_feature = document.querySelector(".active-feature-container-1 > .active-feature");

    features.addEventListener("click", e => {
    console.log(e);
    if (e.target === active_feature_1) {
        active_feature_1.insertAdjacentHTML("afterbegin", `<hr class="active-feature_1">`);
     } else if (e.target === span_target_2) {
        active_feature_2.insertAdjacentHTML("afterbegin", `<hr class="active-feature_2">`);
     } else if (e.target === span_target_3) {
        active_feature_3.insertAdjacentHTML("afterbegin", `<hr class="active-feature_3">`);
     } else {
         console.log("error");
     }
    
    
});  