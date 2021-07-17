


// 返回顶部功能
// 获取页面中返回顶部按钮
var backtop = document.getElementById("backtop");
// 给按钮绑定事件
backtop.onclick = function() {
    // 周期性定时
    var backtopTimer = setInterval(function() {
        // 获取滚动条距离浏览器顶部的距离
        var backtopDistance = document.documentElement.scrollTop || document.body.scrollTop;

        // 滚动越慢
        var scrollSpeed = backtopDistance / 5;
        document.documentElement.scrollTop = backtopDistance - scrollSpeed;

        if (backtopDistance == 0) {
            clearInterval(backtopTimer);
        }
    }, 1);
}

// 返回顶部按钮是否显示
window.onscroll = function() {
    // 设置临界值
    var pageHeight = 1080;

    var backtopDistance = this.document.documentElement.scrollTop || document.body.scrollTop;
    if (backtopDistance > pageHeight) {
        backtop.style.display = "inline";
    } else {
        backtop.style.display = "none";
    }

    //
    // 顶部特效
    //

    // 当组件比较大
    // // 获取页面中下部的内容句柄
    // var btm = document.getElementById("btm");
    // 获取该句柄距离父元素顶部的距离
    // var btmDistance = btm.offsetTop / 10;

    // 获取滚动条距离浏览器顶部的距离
    var topDistance = this.document.documentElement.scrollTop || document.body.scrollTop;

    // 获取页面中上部的个组件句柄
    var component1 = document.getElementById("component-1");
    var component2 = document.getElementById("component-2");
    var component3 = document.getElementById("component-3");
    var component4 = document.getElementById("component-4");
    var component5 = document.getElementById("component-5");
    

    if (topDistance > 0) {
        component1.style.animationName = "zoomOutLeft";
        component2.style.animationName = "bounceOutUp";
        component3.style.animationName = "bounceOutDown";
        component4.style.animationName = "bounceOutDown";
        component5.style.animationName = "zoomOutRight";
    } else {
        component1.style.animationName = "zoomInLeft";
        component2.style.animationName = "bounceInUp";
        component3.style.animationName = "bounceInDown";
        component4.style.animationName = "bounceInDown";
        component5.style.animationName = "zoomInRight";
    }
}