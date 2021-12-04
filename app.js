

$(document).ready(function(){
    $(".coollink").click(function(){
        $(".menuslide").toggleClass("move")
        
    })
}
)
$(document).ready(function(){
    $(".closelink3").click(function(){
        $(".menuslide").toggleClass("move")
        
    })
}
)


$(document).ready(function(){
    $(".musiclink").click(function(){
        $(".musicslide").toggleClass("move2")
        
    })
}
)


$(document).ready(function(){
    $(".closelink").click(function(){
        $(".musicslide").toggleClass("move2")
        
    })
}
)

$(document).ready(function(){
    $(".breathlink").click(function(){
        $(".breathslide").toggleClass("kabira")
    })
})

$(document).ready(function(){
    $(".closelink1").click(function(){
        $(".breathslide").toggleClass("kabira")
        
    })
}
)

$(document).ready(function(){
    $(".con1").click(function(){
        $(".musicslide").toggleClass("bg1")
        
    })
}
)
$(document).ready(function(){
    $(".con2").click(function(){
        $(".musicslide").toggleClass("bg2")
        
    })
}
)
$(document).ready(function(){
    $(".con3").click(function(){
        $(".musicslide").toggleClass("bg3")
        
    })
}
)
$(document).ready(function(){
    $(".con4").click(function(){
        $(".musicslide").toggleClass("bg4")
        
    })
}
)
$(document).ready(function(){
    $(".con5").click(function(){
        $(".musicslide").toggleClass("bg5")
        
    })
}
)
$(document).ready(function(){
    $(".con6").click(function(){
        $(".musicslide").toggleClass("bg6")
        
    })
}
)


var weightless=document.getElementById("weightless");
var icon1=document.getElementById("icon1");

icon1.onclick=function(){
    if(weightless.paused){
        weightless.play();
        icon1.src="stuff/pause.png";

    }else{
        weightless.pause();
        icon1.src="stuff/play.png";
    }
}

var forest=document.getElementById("forest");
var icon2=document.getElementById("icon2");

icon2.onclick=function(){
    if(forest.paused){
        forest.play();
        icon2.src="stuff/pause.png";

    }else{
        forest.pause();
        icon2.src="stuff/play.png";
    }
}

var lofi=document.getElementById("lofi");
var icon3=document.getElementById("icon3");

icon3.onclick=function(){
    if(lofi.paused){
        lofi.play();
        icon3.src="stuff/pause.png";

    }else{
        lofi.pause();
        icon3.src="stuff/play.png";
    }
}

var bowl=document.getElementById("bowl");
var icon4=document.getElementById("icon4");

icon4.onclick=function(){
    if(bowl.paused){
        bowl.play();
        icon4.src="stuff/pause.png";

    }else{
        bowl.pause();
        icon4.src="stuff/play.png";
    }
}

var beach=document.getElementById("beach");
var icon5=document.getElementById("icon5");

icon5.onclick=function(){
    if(beach.paused){
        beach.play();
        icon5.src="stuff/pause.png";

    }else{
        beach.pause();
        icon5.src="stuff/play.png";
    }
}

var piano=document.getElementById("piano");
var icon6=document.getElementById("icon6");

icon6.onclick=function(){
    if(piano.paused){
        piano.play();
        icon6.src="stuff/pause.png";

    }else{
        piano.pause();
        icon6.src="stuff/play.png";
    }
}

const container =document.querySelector('.container')
const text=document.querySelector('#text')

const totalTime=7500
const breathetime=(totalTime/5)*2
const holdTime=totalTime/5

breatheAnimation();

function breatheAnimation(){
    text.innerHTML="Breathe In!";
    container.className="container grow";

    setTimeout(()=>{
        text.innerText='Hold';

        setTimeout(()=>{
            text.innerText='Breathe Out!';
            container.className='container shrink';
        },holdTime);

    },breathetime);
}

setInterval(breatheAnimation,totalTime);
