/**
 * @file canvas
 * @description file contain canvas main function
 * @author chenhuashang
 * 
 */
// canvas 默认值
let width = 200;
let height = 200;

function generateCanvas(imgsrc, width, height, fillstr, textPosX, textPosY, quality) {
    var img = new Image();
    img.crossOrigin = 'anonymous';
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    var url = 'http://a.hiphotos.baidu.com/image/pic/item/48540923dd54564eda5e9c4abdde9c82d1584f8d.jpg';
    img.src = url;

    success() => {
        return new Promise((resolve, reject) => {
            img.onload = () => {
                ctx.drawImage(img, 0, 0, 200, 200);
                _fillText(ctx, 'chenhuashang', 100, 100)
                resolve(canvas.toDataURL('image/jpeg', 0.6))
            };
        })
    }
    return await success();
}
fucntion _setTextPosition(x, y) {

}

// 填充文本
function _fillText(ctx, text, x, y) {
    x = x ? x : width / 200;
    y = y ? y : height / 200;
    text = text || 'canvas2img';
    ctx.font = '100px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#FF0000';
    ctx.fillText(text, 100, 100);
}

// 判断图片url地址是否合法
function _checkImg(src) {
    return /http.+/.test(src);
}

function getlog() {
    console.log(`dara`)
}
