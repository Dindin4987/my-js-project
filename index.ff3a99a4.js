const e=document.getElementById("myModal"),t=document.querySelectorAll("[data-modal-open]"),n=document.querySelector(".close");function d(){e.classList.add("is-hidden")}t[0].addEventListener("click",(function(){e.classList.remove("is-hidden")})),n.addEventListener("click",d),document.addEventListener("keydown",(function(e){"Escape"===e.key&&d()})),document.addEventListener("click",(e=>{e.target.classList.contains("modal-overlay")&&d()}));
//# sourceMappingURL=index.ff3a99a4.js.map
