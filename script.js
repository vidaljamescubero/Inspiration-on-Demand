window.addEventListener('resize', function(){
    if (window.screen.width < 940 && window.screen.width > 600) {

        let pageContainer=document.querySelector(".inspiration-on-demand-desktop")
        let container = document.querySelector(".inspiration-on-demand-container")

        let scale = window.screen.width / 940 ;
        let height = scale * 7711 ;

        document.querySelector(".inspiration-on-demand-desktop").style.cssText =`
        transform: scale(${scale});
        height: ${height}px;
        transform-origin: left top;
        -webkit-transform: scale(${scale});
        -webkit-transform-origin: left top;
        `
    } else {
        document.querySelector(".inspiration-on-demand-desktop").style.cssText =`
        `
    }
})

window.onload = function() {
    if (window.screen.width < 940 && window.screen.width > 600) {

        let pageContainer=document.querySelector(".inspiration-on-demand-desktop")
        let container = document.querySelector(".inspiration-on-demand-container")

        let scale = window.screen.width / 940 ;
        let height = scale * 7711 ;

        document.querySelector(".inspiration-on-demand-desktop").style.cssText =`
        transform: scale(${scale});
        height: ${height}px;
        transform-origin: left top;
        -webkit-transform: scale(${scale});
        -webkit-transform-origin: left top;
        `
    } else {
        document.querySelector(".inspiration-on-demand-desktop").style.cssText =`
        `
    }
}