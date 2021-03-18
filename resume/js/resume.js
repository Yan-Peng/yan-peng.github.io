window.onscroll = function() {changeNavBG()};

function changeNavBG() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").classList.add("navbarNewStyle");
    } else {
        document.getElementById("navbar").classList.remove("navbarNewStyle");
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
