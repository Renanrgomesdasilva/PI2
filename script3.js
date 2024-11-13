window.onscroll = function(){
    const header = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("rolagem");
    } else {
        header.classList.remove("rolagem");
    }
};