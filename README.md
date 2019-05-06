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

