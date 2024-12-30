function sideNav(){
    let menu = document.querySelector("#menu")
    let sideNav = document.querySelector(".side-nav")
    let close = document.querySelector(".side-nav i")
    menu.addEventListener("click",function(){
        sideNav.style.right = "0"
    })
    close.addEventListener("click",function(){
        sideNav.style.right = "-100%"
    })
}

function mousefollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector(".mini-circle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`
        document.querySelector(".mini-circle").style.transition = "all cubic-bezier(0.19, 1, 0.22, 1) .5s"
    })
}

mousefollower();
sideNav();

