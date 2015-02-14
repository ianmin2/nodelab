var looper;
var degrees = 0;

function rotateAnimation(el,speed){

    var elem = document.getElementById(el);

    if(navigator.userAgent.match("Chrome")){

        elem.style.WebkitTransform = "rotate("+degrees+"deg)";

    } else if(navigator.userAgent.match("Firefox")){

        elem.style.MozTransform = "rotate("+degrees+"deg)";

    } else if(navigator.userAgent.match("MSIE")){

        elem.style.msTransform = "rotate("+degrees+"deg)";

    } else if(navigator.userAgent.match("Opera")){

        elem.style.OTransform = "rotate("+degrees+"deg)";

    } else {

        elem.style.transform = "rotate("+degrees+"deg)";

    }

    looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);

    degrees++;

    if(degrees > 359){

        degrees = 1;

    }

    // document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";


}

function foundUser(){

    clearTimeout( looper );

}

//REAL-TIME TYPING EFFECT GENERATOR
var gameText = function (target, message, index, interval) {

    $(function () {

        if (index < message.length) {

            $(target).append(message[index++]);
            setTimeout(function () {
                gameText(target, message, index, interval);
            }, interval);

        }


    });

}