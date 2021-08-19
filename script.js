const menubar=document.querySelector(".menu-bar")
menubar.addEventListener("click",function()  {
    menubar.classList.toggle("active")
    document.querySelector(".menu-items").classList.toggle("active")
})
window.addEventListener("scroll",function () {
    const x = this.pageYOffset;
    if(x>80){
        document.querySelector(".top").classList.add("active")
    }
    else{
        document.querySelector(".top").classList.remove("active")
    }
})
const menuTitle = document.querySelector(".menu-title");
menuTitle.addEventListener("click",function(x){
    if(x.target.classList.contains("menu-button")){
        const Target = x.target.getAttribute("data-title");
        
        menuTitle.querySelector(".active").classList.remove("active");
        x.target.classList.add("active");

        const menuItem = document.querySelector(".menu");
        menuItem.querySelector(".menu-item-content.active").classList.remove("active");
        menuItem.querySelector(Target).classList.add("active")
        
    }
})
