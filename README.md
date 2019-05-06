# canvas2img
## 图片url转base64


### 使用介绍
```
npm install canvas2img
```

### 示例
```
import canvasToBase from 'canvas2img'

async function getImg() {
    console.log(await canvasToBase(imgUrl, width, height, text, textX, textY, textOpt)) // canvas字体自定义配置
}
```
### 参数

- imgUrl: 图片地址
- width: 图片宽度
- height: 图片高度
- text: 显示文本
- textX: 文本X轴位置
- textY: 文本Y轴位置
- textOpt: 文本设置选项
