var miniNav = document.getElementById("mini_nav");
var navBtncontainer = document.getElementById("nav_btns");
var navigationcontainer = document.getElementById("navigation_container");
miniNav.addEventListener("click",function(){  
    navigationcontainer.style.position = "relative";
    navBtncontainer.style.display = "flex";
    navBtncontainer.style.flexDirection = "column";
    navBtncontainer.style.position = "absolute";
    navBtncontainer.style.top = "0px";
    navBtncontainer.style.left = "0px";
    
});
