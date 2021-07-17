

// 找到页面中背景域
var cover = document.getElementById("cover");

function setWidthHeight() {
    // 网页可见区域宽
    cover.style.width = document.body.clientWidth + "px";
    // 网页可见区域高
    cover.style.height = document.body.clientHeight + "px";
    // cover.style.backgroundSize = document.body.clientWidth + "px " + document.body.clientHeight + "px";
}

// 获取主页
var home = document.getElementById("home");

// 获取主页按钮
var homeButton = document.getElementById("home-button");
// 绑定事件
homeButton.onclick = function() {
    displayHome();
}

// 滚轮滚动跳至主页
var scrollToHome = function(e) {
    e = e || window.event;
    if (e.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件    
        // if (e.wheelDelta > 0) { //当滑轮向上滚动时 
        //     // console.log("滑轮向上滚动");
        // }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时 
            // console.log("滑轮向下滚动");
            displayHome();
        }
    } else if (e.detail) { //Firefox滑轮事件 
        // if (e.detail > 0) { //当滑轮向上滚动时 
        //     // console.log("滑轮向上滚动");
        // }
        if (e.detail < 0) { //当滑轮向下滚动时 
            // console.log("滑轮向下滚动");
            displayHome();
        }
    }
}

//给页面绑定滑轮滚动事件 
//firefox 
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollToHome, false);
}          
//滚动滑轮触发scrollToHome方法 //ie 谷歌 
window.onmousewheel = document.onmousewheel = scrollToHome;

// 打开主页
function displayHome() {
    cover.style.animationName = "zoomOutLeft";

    setTimeout("cover.style.display = 'none'", 550);

    home.style.display = "inline";
}

// 返回封面功能
// 获取页面中返回封面按钮
var backCover = document.getElementById("back-cover");
// 给按钮绑定事件
backCover.onclick = function() {
    displayCover();
}

// 打开封面
function displayCover() {
    cover.style.animationName = "zoomInLeft";
    home.style.animationName = "fadeOutRight";

    setTimeout("home.style.display = 'none'; home.style.animationName = 'none';", 550);

    cover.style.display = "inline";
}


// // 找到页面中分类专栏按钮
// var classification = document.getElementById("classification");
// // 给按钮绑定事件
// classification.onclick = function() {
//     // 周期性定时
//     var topClassificationimer = setInterval(function(){
//         // 获取滚动条距离浏览器顶部的距离
//         var classificationDistance = document.documentElement.scrollTop || document.body.scrollTop;

//         // 滚动越慢
//         var ScrollSpeed = classificationDistance / 5;
//         document.documentElement.scrollTop = classificationDistance - ScrollSpeed;

//         if (classificationDistance == 0) {
//             clearInterval(topClassificationimer);
//         }
//     }, 30);
// }


// 封面描述
// 全局选择器
var selector = 0;

function setCoverDescribe() {
    // 描述内容
    var describe = [
        "Happiness is you, you are my happiness.", 
        "Pathetic fantasy, but I can't help it.", 
        "For our future, I can grasp the future.",
        "Destiny of reincarnation, pursuit of my destination, you are my ambition, this is fate.",
        "I love you baby! I swear by God."
    ];

    // 获取封面描述句柄
    var coverDescribe = document.getElementById("cover-describe");

    // 修改描述内容
    coverDescribe.innerHTML = describe[selector];
    selector++;

    // 归零数组下标
    if (selector >= describe.length) {
        selector = 0;
    }
}
