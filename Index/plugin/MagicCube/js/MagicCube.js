

/**
 * 爱情魔方
*/
function magicCube(magicCubeNameById) {
    // 选择魔方各面
    var array = document.querySelectorAll(magicCubeNameById+ " " + ".box-page");
    var piece = 3; // 3*3结构
    var pieceSize = 30; // 片大小
    var selector = 0; // 扩展，供应第二次选择此插件

    // 遍历6个面
    for (var n = 0, selector = 1; n < array.length; n++, selector++) {
        // 行
        for (var row = 0; row < piece; row++) {
            // 列
            for (var col = 0; col < piece; col++) {
                // 创建元素
                var divs = document.createElement("div");

                divs.style.position = "absolute";
                divs.style.bottom = "0px";
                divs.style.width = "30px";
                divs.style.height = "30px";
                divs.style.borderRadius = "1px";
                divs.style.border = "1px solid rgb(227,233,235)";
                divs.style.boxSizing = "border-box";
                divs.style.backgroundImage = "url(Index/plugin/MagicCube/src/images/love" + selector + ".jpg)";
                divs.style.backgroundSize = "99px 99px";
                divs.style.opacity = "0.82";

                array[n].appendChild(divs);

                divs.style.top = row * pieceSize + "px";
                divs.style.left = col * pieceSize + "px";

                divs.style.backgroundPositionX = -col * pieceSize + "px";
                divs.style.backgroundPositionY = -row * pieceSize + "px";
            }
        }

        // 归零
        if (selector >= 6) {
            selector = 0;
        }
    }
}