var designWidth = 1200;//设计宽度
var rem2px = 40;//
document.documentElement.style.fontSize =
    ((window.innerWidth / designWidth) * rem2px) + 'px';
window.onresize = function () {
    document.documentElement.style.fontSize =
        ((window.innerWidth / designWidth) * rem2px) + 'px';
}