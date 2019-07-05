/** 
 * @param {*} areaDom 轮播图区域
 * @param {*} options 图片
 */
function createBannerArea(areaDom, options) {
    var imgArea = document.createElement("div")//图片区域的div
    var numberArea = document.createElement('div');//脚标
    var curIndex = 0//当前显示的是第几张
    var changeTimer = null;//自动切换计时器
    var changeDuration = 3000;//3s切换间隔

    // 1.创建一个区域用于显示图片。
    initImgs()
    // 2.创建一个区域用于显示角标。
    initNumber();
    // 3.设置状态
    setStatus()
    // 4.自动切换。
    autoChange()


    // 局部函数
    /**
     * 初始化图片区域
     */
    function initImgs() {
        imgArea.style.width = '100%';
        imgArea.style.height = '100%';
        // 弹性盒子
        imgArea.style.display = 'flex'
        // imgArea.style.overflow = 'hidden';

        for (let i = 0; i < options.length; i++) {
            var img = document.createElement('img');
            img.src = options[i].imgUrl;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.marginLeft = 0;
            img.style.cursor = 'pointer'
            imgArea.appendChild(img)
            img.addEventListener('click', function () {
                location.href = options[i].link;
            })
        }
        areaDom.addEventListener('mouseenter', function () {
            clearInterval(changeTimer);
            changeTimer = null
        })
        areaDom.addEventListener('mouseleave', function () {
            autoChange()
        })
        areaDom.appendChild(imgArea)

    }

    /**
     * 初始化角标区域
     */
    function initNumber() {
        numberArea.style.textAlign = 'center';
        numberArea.style.marginTop = '-25px'
        for (var i = 0; i < options.length; i++) {
            var sp = document.createElement('span');
            sp.style.width = '12px';
            sp.style.height = '12px';
            sp.style.background = 'lightgrey';
            sp.style.display = 'inline-block';
            sp.style.margin = '0 7px'
            sp.style.borderRadius = '50%';
            sp.style.cursor = 'pointer';
            // 使用立即执行函数。或者用let
            (function (index) {
                sp.addEventListener('click', function () {
                    curIndex = index;
                    setStatus();
                })
            })(i);

            numberArea.appendChild(sp);
        }
        areaDom.appendChild(numberArea)
    }

    function setStatus() {
        // 1.设置圆圈的背景色
        for (var i = 0; i < numberArea.children.length; i++) {
            if (i === curIndex) {
                numberArea.children[i].style.background = 'lightsalmon'
            } else {
                numberArea.children[i].style.background = 'lightgrey'
            }
        }
        // 2.图片动画
        var start = parseInt(imgArea.children[0].style.marginLeft);
        var end = curIndex * -100;
        var dis = end - start;
        var speed = dis / 500;
        timer = setInterval(function () {
            start += speed * 20;
            imgArea.children[0].style.marginLeft = start + '%';
            console.log(Math.abs(end - start))
            if (Math.abs(end - start) < 1) {
                imgArea.children[0].style.marginLeft = end + '%';

                clearInterval(timer)

            }
        }, 20)

        // imgArea.children[0].style.tr
    }

    /**
     * 自动切换轮播图
     */
    function autoChange() {
        changeTimer = setInterval(function () {
            curIndex === options.length - 1 ? curIndex = 0 : curIndex++;
            setStatus();
        }, changeDuration)

    }





}