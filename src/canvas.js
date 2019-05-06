/**
 * @file canvas
 * @description file contain canvas main function
 * @author chenhuashang
 *
 */
// canvas 默认值
const {
    createCanvas,
    loadImage
} = require('canvas');

async function canvasToBase(imgUrl, width, height, text, textX, textY, textOpt) {
    let _imgUrl = imgUrl || 'http://a.hiphotos.baidu.com/image/pic/item/48540923dd54564eda5e9c4abdde9c82d1584f8d.jpg';
    let _width = width || 200;
    let _height = height || 200;
    let _text = text || 'canvas2img';
    let _textx = textX || _width / 2;
    let _textY = textY || 10;
    // 定义文字基本设置
    let _basicTextOpt = {
        font: '30px serif',
        textAlign: 'center',
        textBaseline: 'center',
        fillStyle: '#000FFF'
    };
    let _textOpt = Object.assign({}, _basicTextOpt, textOpt);
    let canvas = _initCanvas(_width, _height);

    let base64Data = await generaBase64(canvas, _imgUrl, _width, _height, text, textX, textY, _textOpt);
    return base64Data;
}

// 初始化canvas
function _initCanvas(Cwidth, Cheight) {
    const canvas = createCanvas(Cwidth, Cheight);
    return canvas;
}

// 填充文本
function _fillText(ctx, width, height, text, x, y, option) {
    x = x ? x : width / 2;
    y = y ? y : height / 2;
    text = text || 'canvas2img';
    ctx.font = option && option.font || '20px serif';
    ctx.textAlign = option && option.textAlign || 'center';
    ctx.textBaseline = option && option.textBaseline || 'middle';
    ctx.fillStyle = option && option.fillStyle || '#FF0000';
    ctx = Object.assign(ctx, option);
    ctx.fillText(text, x, y);
}
// 生成base64数据 
function generaBase64(canvas, url, width, height, text, textX, textY, textOpt) {
    let ctx = canvas.getContext('2d');
    let _url = url || 'http://a.hiphotos.baidu.com/image/pic/item/48540923dd54564eda5e9c4abdde9c82d1584f8d.jpg';
    return new Promise((resolve, reject) => {
        loadImage(_url, {
            crossOrigin: 'anonymous'
        }).then(image => {
            ctx.drawImage(image, 0, 0, width, height);
            _fillText(ctx, width, height, text, textX, textY, textOpt);
            resolve(canvas.toDataURL());
        });
    });
}

exports = module.exports = canvasToBase;
