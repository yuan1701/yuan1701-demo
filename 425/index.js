
var chess;
var grid;
var gridNum = 15;
var count;
window.onload = function () {
    chess = document.getElementById('chess');
    init();
}
function init() {
    grid = new Array(gridNum);
    for (var i = 0; i < grid.length; i++) {
        grid[i] = new Array(gridNum)
        for (var j = 0; j < grid[i].length; j++) {
            grid[i][j] = creatGrid(i, j);
            chess.appendChild(grid[i][j])

            grid[i][j].onclick = function () {
                if (this.value > 0) { return; }
                this.style.backgroundImage = 'url(./images/' + (count % 2 + 1) + '.png)';
                count += 1;
                this.value = count % 2 + 1;
                var check = checkFinish();
                if(){
                     
                }

            }

        }
    }

}
function creatGrid(x, y) {
    // left---x;top----y
    var temp = document.createElement('div');
    temp.classList.add('grid')
    temp.style.left = y * 50 + 7 + 'px';
    temp.style.top = x * 50 + 7 + 'px';
    temp.value = 0//0-无1-白2-黑
    return temp;
}
function checkFinish() {//判断游戏是否结束
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) { 
            if(grid[i](j).value==0){
                continue;
            }
            var result=checkLine(i,j)
            if(result>0){
                return result
            }
        }
    }

}
function checkLine(x,y){//是否连成五子

}
