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

departMarquee();
function departMarquee(){
    let marquee = document.getElementsByClassName("marquee");
    marquee[0].style.animationDuration = "17s";
    marquee[1].style.animationDuration = "16s";
    marquee[2].style.animationDuration = "15s";
}

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

// let item = document.getElementsByClassName("item");
// for(let i = 0; i < item.length; i++){
    // item[0].addEventListener("mousemove", function(){
    //     alert("hello");
    //     document.querySelector(".about .item .textBox").style.transform = "translate(0%, 50%);";
    //     document.querySelector(".about .item .overlay").style.height = "100%";
    //     document.querySelector(".about .item img").style.opacity = 0.7;
    //     document.querySelector(".about .item img").style.boxShadow = "2px 2px 10px 10px grey";
    // });
// }
