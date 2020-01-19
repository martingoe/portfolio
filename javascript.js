window.onscroll = function () {
    const popout = document.getElementById("popout");
    if(window.innerWidth > 800) {
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
