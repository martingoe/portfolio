window.onscroll = function () {
    const popout = document.getElementById("popout");
    if(window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2), (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2), (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2), (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3), (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3), (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2), (device-width: 320px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3), (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4), (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3), (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4), (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3), (device-width: 480px) and (device-height: 800px)").matches) {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            popout.style.width = "60%";
            changeOpacity("1")

        } else {
            popout.style.width = "0";
            changeOpacity("0")
        }
    }
};

function changeOpacity(x) {
    const children = popout.childNodes;
    for (var i = 0; i < children.length; i++) {
        if (children[i].nodeName.toLowerCase() === 'div') {
            children[i].style.opacity = x;
        }
    }
}
