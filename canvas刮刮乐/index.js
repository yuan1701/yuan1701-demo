window.onload = function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d')//绘制图形
    ctx.beginPath()//开始路径
    ctx.rect(0, 0, 300, 150);//绘制矩形
    ctx.fillStyle = '#c0c0c0';//填充色
    ctx.fill();//填充
    ctx.closePath();//关闭路径

    // 按下事件
    canvas.onmousedown = function (event) {
        // 移动事件
        canvas.onmousemove = function (event) {
            var x = event.clientX;
            var y = event.clientY;
            // 清除绘制
            ctx.clearRect(x, y, 30, 30)
        }
        // 松开事件
        canvas.onmouseup = function () {
            canvas.onmousemove = null;
        }
        // 中奖信息
        var arr=['引蛇出洞','谢谢惠顾']
        var prize = document.querySelector('.prize')
        // 随机数
        var i= Math.floor(Math.random()*arr.length)
        console.log(prize.innerText)
        if(!prize.innerText){
            prize.innerText = arr[i]
        }
        
    }


}