/**
 * Created by lenov on 2017/7/21.
 */
//浏览器缩放时
window.onresize=function(){
    change();
};

change();
function change(){
    var oFs=document.documentElement.clientWidth/(320/20);

    //设置根目录字体大小
    document.documentElement.style.fontSize=oFs+'px';
}