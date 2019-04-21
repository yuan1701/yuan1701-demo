var citySelect = {

    li_province: '',
    li_city: '',
    bool:true,
    init: function () {
        this.showProvince();
        this.showCity()
    },
    showCity: function () {
        $('ul.province').innerHTML = '';
        var len = data.length;
        var proStr = '';
        for (var i = 0; i < len; i++) {
            proStr += '<li>' + data[i].name + '</li>';
        }

        $('ul.province')[0].innerHTML = proStr

        this.li_province = $('ul.province li');

        for (var j = 0; j < len; j++) {
            this.li_province[j].index = j;
            this.li_province[j].addEventListener('mouseenter', this.citymouseEnter.bind(this));
        }
    },
    citymouseEnter: function (e) {
        for (var j = 0; j < this.li_province.length; j++) {
            this.li_province[j].style.background = '#fff'
        }
        e.target.style.background = '#f1f3f6';


        $("ul.city")[0].innerHTML = '';
        var citys = data[e.target.index].child;
        var len = data[e.target.index].child.length;
        var cityStr = '';
        for (var i = 0; i < len; i++) {
            cityStr += '<li>' + citys[i].name + '</li>';
        }
        $("ul.city")[0].innerHTML = cityStr;


        this.li_city = $("ul.city li");
        for (var k = 0; k < len; k++) {
            this.li_city[k].addEventListener('click', this.cityClick.bind(this))
        }
    },
    cityClick: function (e) {
        var str = e.target.innerHTML;
        console.log(str)
        $(".fonter")[0].innerHTML = str;
        $(".dragDown")[0].style.display = 'none';
        this.bool=true;

    },
    showProvince: function () {
        console.log($(".fonter")[0])
        var self =this;
        $(".fonter")[0].onclick=function(){
           
            if(self.bool){
                self.bool=false;
                $(".dragDown")[0].style.display = 'block'
            }else{
                self.bool=true;
                $(".dragDown")[0].style.display = 'none'

            }
        }

    }

}
citySelect.init();
console.log()
// this指向：4种方法


// 读取本地的json文件-1.js确实无法对本地资源进行ajax请求。使用了http。解决方法是运行本地服务器提供文件服务，$.getJSON()读取json文件2.在脚本源中引入json文件当做js文件处理


// 理解跨域首先必须要了解同源策略。同源策略是浏览器上为安全性考虑实施的非常重要的安全策略。 何谓同源: URL由协议、域名、端口和路径组成，如果两个URL的协议、域名和端口相同，则表示他们同源。同源策略: 浏览器的同源策略，限制了来自不同源的"document"或脚本，对当前"document"读取或设置某些属性。从一个域上加载的脚本不允许访问另外一个域的文档属性。
// 如果是自己开发的网站那就很简单，只需要在后台(C#)输出json的同时给Response增加一个Header头，开启允许跨域请求就可以完美的解决该问题。
// Response.AddHeader("Access-Control-Allow-Origin", "null");


// 下边是测试中用到的获取天气json数据的一些资料
// C# 获取天气 JSON解析        http://blog.csdn.net/ecocn/article/details/8542152
// 天气预报接口|API|城市代码   http://blog.csdn.net/a535537066/article/details/6656365