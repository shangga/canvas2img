(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@babel/runtime/regenerator'), require('@babel/runtime/helpers/asyncToGenerator')) :
    typeof define === 'function' && define.amd ? define(['@babel/runtime/regenerator', '@babel/runtime/helpers/asyncToGenerator'], factory) :
    (global = global || self, factory(global._regeneratorRuntime, global._asyncToGenerator));
}(this, function (_regeneratorRuntime, _asyncToGenerator) { 'use strict';

    _regeneratorRuntime = _regeneratorRuntime && _regeneratorRuntime.hasOwnProperty('default') ? _regeneratorRuntime['default'] : _regeneratorRuntime;
    _asyncToGenerator = _asyncToGenerator && _asyncToGenerator.hasOwnProperty('default') ? _asyncToGenerator['default'] : _asyncToGenerator;

    /**
     * @file canvas
     * @description file contain canvas main function
     * @author chenhuashang
     *
     */
    // canvas 默认值
    var _require = require('canvas'),
        createCanvas = _require.createCanvas,
        loadImage = _require.loadImage;

    function canvasToBase(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
      return _canvasToBase.apply(this, arguments);
    } // 初始化canvas


    function _canvasToBase() {
      _canvasToBase = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(imgUrl, width, height, text, textX, textY, textOpt) {
        var _imgUrl, _width, _height, _basicTextOpt, _textOpt, canvas, base64Data;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _imgUrl = imgUrl || 'http://a.hiphotos.baidu.com/image/pic/item/48540923dd54564eda5e9c4abdde9c82d1584f8d.jpg';
                _width = width || 200;
                _height = height || 200;

                _basicTextOpt = {
                  font: '30px serif',
                  textAlign: 'center',
                  textBaseline: 'center',
                  fillStyle: '#000FFF'
                };
                _textOpt = Object.assign({}, _basicTextOpt, textOpt);
                canvas = _initCanvas(_width, _height);
                _context.next = 11;
                return generaBase64(canvas, _imgUrl, _width, _height, text, textX, textY, _textOpt);

              case 11:
                base64Data = _context.sent;
                return _context.abrupt("return", base64Data);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _canvasToBase.apply(this, arguments);
    }

    function _initCanvas(Cwidth, Cheight) {
      var canvas = createCanvas(Cwidth, Cheight);
      return canvas;
    } // 填充文本


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
    } // 生成base64数据 


    function generaBase64(canvas, url, width, height, text, textX, textY, textOpt) {
      var ctx = canvas.getContext('2d');

      var _url = url || 'http://a.hiphotos.baidu.com/image/pic/item/48540923dd54564eda5e9c4abdde9c82d1584f8d.jpg';

      return new Promise(function (resolve, reject) {
        loadImage(_url, {
          crossOrigin: 'anonymous'
        }).then(function (image) {
          ctx.drawImage(image, 0, 0, width, height);

          _fillText(ctx, width, height, text, textX, textY, textOpt);

          resolve(canvas.toDataURL());
        });
      });
    }

    exports = module.exports = canvasToBase;

}));
