/**
 * Created by DaisyCream on 15/10/13.
 */
/*****************************set the element Height**********************************/
var SCROLLWHEEL = function(){};

var screenHeight = document.documentElement.clientHeight;
SCROLLWHEEL.target = document.getElementsByTagName('div');
body = document.getElementsByTagName('body')[0];

/***
 * set the element's height
 */
for(var i=0;i<SCROLLWHEEL.target.length;i++){
    SCROLLWHEEL.target[i].style.height = screenHeight + 'px';
}

SCROLLWHEEL.nowLong = 0;
SCROLLWHEEL.isMoreScroll = false;


SCROLLWHEEL.startScroll = function(){
    if(window.addEventListener){
        window.addEventListener('DOMMouseScroll',SCROLLWHEEL.scroll,false);
    }
    window.onmousewheel = SCROLLWHEEL.scroll;
};

SCROLLWHEEL.scroll = function(e){
    if(SCROLLWHEEL.isMoreScroll){
        return;
    }
    SCROLLWHEEL.isMoreScroll = true;
    setTimeout(function(){
        SCROLLWHEEL.isMoreScroll = false;
    },1500);
    e = e || window.event;
    if(e.wheelDelta){
        if(e.wheelDelta>0){
            SCROLLWHEEL.goUp();
        }
        else{
            SCROLLWHEEL.goDown();
        }
    }
    if(e.detail){//fireFox
        if(e.detail>0){
            SCROLLWHEEL.goDown();
        }
        else{
            SCROLLWHEEL.goUp();
        }
    }

};

SCROLLWHEEL.goDown = function(){
    if(SCROLLWHEEL.nowLong > -(SCROLLWHEEL.target.length - 1)){
        SCROLLWHEEL.nowLong--;
    }
    body.style.top = SCROLLWHEEL.nowLong * screenHeight + 'px';
};
SCROLLWHEEL.goUp = function(){
    if(SCROLLWHEEL.nowLong < 0){
        SCROLLWHEEL.nowLong++;
    }
    body.style.top = SCROLLWHEEL.nowLong * screenHeight + 'px';
};

window.onload = function(){
    body.style.top = '0px';
    SCROLLWHEEL.startScroll();
};

//set the height
//var long = document.documentElement.clientHeight;
//var body = document.getElementsByTagName('body')[0];
//var div = document.getElementsByTagName('div');
//var topNow = 0;
//var isMoreWheel = true;//For the TouchPad
//for(var i=0;i<div.length;i++){
//    div[i].style.height = long + 'px';
//}
//
//function wheel(){
//    if(document.attachEvent){//IE
//        console.log("this");
//        document.attachEvent('DOMMouseScroll',scroll,true);
//    }
//    window.onmousewheel = scroll;
//}
//
//
//var scroll = function(e){
//    if(isMoreWheel){
//        return;
//    }
//    e = e || window.event;
//    if(e.wheelDelta){
//        if(e.wheelDelta>0){
//            goBack();
//        }
//        else{
//            goTo();
//        }
//    }
//    else if(e.detail){
//        if(e.detail>0){
//            goTo();
//        }
//        else{
//            goBack();
//        }
//    }
//    isMoreWheel = true;
//    console.log(isMoreWheel);
//};
//
//var goTo = function(){
//    if(topNow>-(div.length-1)){
//        topNow--;
//    }
//    body.style.top = topNow*long + 'px';
//};
//
//var goBack = function(){
//    if (topNow<0){
//        topNow++;
//    }
//    body.style.top = topNow*long + 'px';
//};
//
//window.onload = function(){
//    body.style.top = '0px';
//    wheel();
//};