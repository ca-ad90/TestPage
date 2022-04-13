function look(e) {
    var face = document.getElementById("face")
    var eyes = document.getElementById("eyes")
    var glasses = document.getElementById("glasses")

    var tx, ty, t, ey, ex, e, g, gx, gy
    var svgDiv = document.querySelector("div.bear-svg-container")
    var cx = document.body.offsetWidth / 2
    var cy = svgDiv.offsetHeight / 2
    var tx = Math.abs(((e.clientX - cx) / cx) * 5) >= 10 ? 10 : (((e.clientX - cx) / cx) * 5)
    var ty = Math.abs(((e.clientY - cy) / cy) * 5) >= 10 ? 10 : (((e.clientY - cy) / cy) * 5)
    var ex = Math.abs(((e.clientX - cx) / cx) * 8) >= 16 ? 16 : (((e.clientX - cx) / cx) * 8)
    var ey = Math.abs(((e.clientY - cy) / cy) * 8) >= 16 ? 16 : (((e.clientY - cy) / cy) * 8)
    var gx = Math.abs(((e.clientX - cx) / cx) * 7) >= 14 ? 14 : (((e.clientX - cx) / cx) * 7)
    var gy = Math.abs(((e.clientY - cy) / cy) * 7) >= 14 ? 14 : (((e.clientY - cy) / cy) * 7)






    if (!face.style.transform) {
        face.style.transform = "translateX(0px) translateY(0px)"
    }
    if (!eyes.style.transform) {
        eyes.style.transform = "translateX(0px) translateY(0px)"
    }
    if (!glasses.style.transform) {
        glasses.style.transform = "translateX(0px) translateY(0px)"
    }

    face.style.transform = `translateX(${tx}px) translateY(${ty}px)`
    eyes.style.transform = `translateX(${ex}px) translateY(${ey}px)`
    glasses.style.transform = `translateX(${gx}px) translateY(${gy}px)`

}

function onScroll(e) {
    var headerWrapper = document.getElementById("header-wrapper")
    var scrollLength = document.getElementById("header-wrapper").classList.contains("mid") ? 300 : 600;
    currentScroll = window.pageYOffset
    console.log(currentScroll)
    if(scrollLength-currentScroll<=200){
        document.querySelector("#btn-container .spacer").style.width="150px"
        document.querySelector("#logo-svg-content").style.strokeWidth = "0.4px"
    } else {
        document.querySelector("#logo-svg-content").style.strokeWidth = "0px"
        document.querySelector("#btn-container .spacer").style.width="0px"}
    
    if(scrollLength-currentScroll>=80){
        headerWrapper.style.height = (scrollLength-currentScroll) + "px"
        document.querySelector("#head-bg").style.display="none"
        if((document.getElementById("btn-container").classList.contains("small"))){
            document.getElementById("btn-container").classList.remove("small")
            }

    } else {
        document.querySelector("#logo-svg-content").style.strokeWidth = "0.6px"
        headerWrapper.style.height = "80px"
        document.querySelector("#head-bg").style.display="inline"
            if(!(document.getElementById("btn-container").classList.contains("small"))){
                document.getElementById("btn-container").classList.add("small")
            }
    }
}
window.onscroll = onScroll;
window.addEventListener("mousemove",look)

