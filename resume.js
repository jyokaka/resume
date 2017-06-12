//   轮播图效果
    var cont = document.getElementById('content');
    var oUL = cont.getElementsByTagName('ul')[0];
    var oli = oUL.getElementsByTagName('li');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    var lastChild = oUL.children[0].cloneNode(true);   //为了实现无缝，将第一张图片复制放到最后面
    oUL.appendChild(lastChild);
    for(var i=0;i<oli.length;i++){
        oli[i].style.width = cont.offsetWidth+'px';
    }
    oUL.style.width = cont.offsetWidth * oli.length + 'px';
    var index = 0; 
    var timer = null;   //定时器
    

    function play(){
        timer = setInterval(function(){
            index++;
            move();
        },8000)
    }
    play();
    function move(){
        if(index == oli.length){
            oUL.style.left = 0;
            index = 1;
        }else if(index == -1){           //点击往左时触发
            oUL.style.left = -(oli.length-1)*oli[0].offsetWidth + 'px';
            index = oli.length-2;
        }
        doMove(oUL,'left',-index*oli[0].offsetWidth);   
    }
    cont.onmouseover = function(){
    clearInterval(timer);
    }
    cont.onmouseout = play;

    prev.onclick = function(){
    index--;
    move();
    }
    next.onclick = function(){
    index++;
    move();
    }

function  doMove (obj,attr,target){   //对象 属性 以及要实现的目标值
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){ 
        var speed = (target - parseInt(getStyle(obj,attr))) / 8;  //getstyle返回的是字符串，要转为数字
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if(parseInt(getStyle(obj,attr)) == target){
            clearInterval(obj.timer);
        }else{
            obj.style[attr] = parseInt(getStyle(obj,attr)) + speed + 'px';
        }
    },30)
}
function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}   //获取非行间的样式 currentStyle是IE，它是作为DOM元素属性存在的  getComputedStyle获取到当前对象样式
 
 
//links   闭包
var olList = document.getElementById('links-box');
var liItems = olList.getElementsByTagName('a');
var boxs = olList.getElementsByTagName('div');
for(var i=0;i<liItems.length;i++){
    var liItem = liItems[i];
    liItem.onmouseover = (function(i){
           return function(){
            boxs[i].style.display = 'block';
           }
    })(i);
    liItem.onmouseout = (function(i){
           return function(){
            boxs[i].style.display = 'none';
           }
    })(i);
}


 
// var oUl = document.getElementById('links-box');
// oUl.onclick = function(e) {
//     var e = e || event;
//     var target = e.target || e.srcElement;
//     if (target.nodeName.toLowerCase() == 'a') {
//           alert('1')
//      }
// }
