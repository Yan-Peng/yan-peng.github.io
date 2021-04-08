const dropdownList = document.querySelector(".dropdown-list");
const dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", ()=>{
    if(dropdownList.style.display === "flex"){
        dropdownList.style = "display: none;"
    }else{
        dropdownList.style = "display: flex;";
    }
});


// const nav_item = document.getElementsByClassName(".nav_item");

let status = "none";
function showList(){
    const li_1 = document.querySelectorAll("li:nth-child(-n+2)");
    const li_2 = document.querySelectorAll("li:nth-child(n+4)");
    if(status === "none"){
        status = "flex";
    }else{
        status = "none";
    }
    
    for(let i = 0; i < li_1.length; i++){
        li_1[i].style.display = status;
    }

    for(let i = 0; i < li_2.length; i++){
        li_2[i].style.display = status;
    }
}