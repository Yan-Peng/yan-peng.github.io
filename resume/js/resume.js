window.onscroll = function() {changeNavBG()};

function changeNavBG() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar_1").classList.add("navbarNewStyle");
    } else {
        document.getElementById("navbar_1").classList.remove("navbarNewStyle");
    }
}

let index = 0;
showSlide();
function showSlide(){
    let slide = document.getElementsByClassName("slider");
    if(index >= slide.length){
        index = 0;
    }
    for (i = 0; i < slide.length; i++) { //所有圖片隱藏
        slide[i].style.display = "none";  
    }
    slide[index].style.display = "block"; //只顯示一張圖片
    index++;
    setTimeout(showSlide, 2000);
}

// departMarquee();
// function departMarquee(){
//     let marquee = document.getElementsByClassName("marquee");
//     marquee[0].style.animationDuration = "17s";
//     marquee[1].style.animationDuration = "16s";
//     marquee[2].style.animationDuration = "15s";
// }

let navOverlay = document.getElementById("overlaySide");
function showNav(){
    let nav_2 = document.getElementById("siderbar");
    nav_2.style.display = "block";

    navOverlay.style.display = "block";
    navOverlay.style.opacity = 0.3;
}

function closeSidebar(){
    let nav_2 = document.getElementById("siderbar");
    nav_2.style.display = "none";

    navOverlay.style.display = "none";
    navOverlay.style.opacity = 0;
}


document.getElementById("overlaySide").addEventListener("click", function() {
    closeSidebar();
});


let showPic = document.getElementsByClassName("showPic");
let indicator_item = document.getElementsByClassName("indicator-item");
let currentIndex = 0;
function carouselInitial(){  //讓所有Pic消失
    for(let i = 1; i < showPic.length; i++){ 
        showPic[i].style.display = "none";
    }
    indicator_item[currentIndex].style.backgroundColor = "black";

    for(let i = 0; i < indicator_item.length; i++){
        indicator_item[i].addEventListener("click", function(){
            showPic[currentIndex].style.display = "none";
            indicator_item[currentIndex].style.backgroundColor = "transparent";
            currentIndex = i;
            showPic[currentIndex].style.display = "block";
            indicator_item[currentIndex].style.backgroundColor = "black";
        });
    }
}
carouselInitial();

document.getElementById("next").addEventListener("click", function(){
    showPic[currentIndex].style.display = "none";
    indicator_item[currentIndex].style.backgroundColor = "transparent";
    currentIndex++;
    if(currentIndex >= 3){
        currentIndex = 0;
    }
    showPic[currentIndex].style.display = "block";
    indicator_item[currentIndex].style.backgroundColor = "black";
});

document.getElementById("pre").addEventListener("click", function(){
    showPic[currentIndex].style.display = "none";
    indicator_item[currentIndex].style.backgroundColor = "transparent";
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = 2;
    }
    showPic[currentIndex].style.display = "block";
    indicator_item[currentIndex].style.backgroundColor = "black";
});
