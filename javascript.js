window.onscroll = function () {
    const aboutcontainer = document.getElementById("aboutcontainer");
    const toolsSection = document.getElementById("toolsSection");
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        aboutcontainer.style.width = "100%";
        toolsSection.style.opacity = "1";
    } else {
        toolsSection.style.opacity = "0";
        aboutcontainer.style.width = "41.666667%";
    }
};
