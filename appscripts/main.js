let svgdiv = document.getElementById("canvas");
var paper = new Raphael(svgdiv);

let raphealPath;
let mousePushed = false;
function map(x,a,b,m,n){
 let range = n-m;
 let proportion = (x-a)/(b-a);
 return (m+proportion*range);
} 
//slider
let sliderR = document.getElementById("sliderR");
let sliderG = document.getElementById("sliderG");
let sliderB = document.getElementById("sliderB");
let opacity = document.getElementById("opacity");
let sliderStroke = document.getElementById("sliderStroke");
let action = paper.set();
//button effects
let techBtn = document.getElementById("tech");
let inkBtn = document.getElementById("ink");
let oilBtn = document.getElementById("oil");
let pencilBtn = document.getElementById("pencil");
let cubeBtn = document.getElementById("cube");
let rainbowBtn = document.getElementById("rainbow");
let bucketBtn = document.getElementById("bg");
let eraserBtn = document.getElementById("e");
//drawing modes
let techMode = false; 
let inkMode = false;
let oilMode = false;
let pencilMode = false; 
let cubeMode = false;
let rainbowMode = false;
let bucketMode = false;
let eraserMode = false;

//Button Functions
techBtn.onclick=function(){
BtnFunction1(techBtn);
techMode = true;
sliderG.value =255;
palette.style.backgroundColor = `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;
//close other buttons
inkMode = false;
BtnFunction2(inkBtn);
oilMode = false;
BtnFunction2(oilBtn);
cubeMode = false;
BtnFunction2(cubeBtn);
rainbowMode = false;
BtnFunction2(rainbowBtn);
eraserMode = false;
BtnFunction2(eraserBtn);
pencilMode = false;
BtnFunction2(pencilBtn);
bucketMode = false;
BtnFunction2(bucketBtn);
};

inkBtn.onclick=function(){
BtnFunction1(inkBtn);
inkMode = true;
sliderR.value = 0;
sliderG.value = 0;
sliderB.value = 0;
palette.style.backgroundColor = `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;
sliderStroke.value = 20;
//close other buttons
techMode=false;
BtnFunction2(techBtn);
oilMode = false;
BtnFunction2(oilBtn);
rainbowMode = false;
BtnFunction2(rainbowBtn);
eraserMode = false;
BtnFunction2(eraserBtn);
pencilMode = false;
BtnFunction2(pencilBtn);
cubeMode = false;
BtnFunction2(cubeBtn);
bucketMode = false;
BtnFunction2(bucketBtn);
};

oilBtn.onclick=function(){
BtnFunction1(oilBtn);
oilMode = true;
sliderR.value = 30;
sliderG.value = 255;
sliderB.value = 230;
palette.style.backgroundColor = `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;
//close other buttons
inkMode = false;
BtnFunction2(inkBtn);
techMode = false;
BtnFunction2(techBtn);
rainbowMode = false;
BtnFunction2(rainbowBtn);
eraserMode = false;
BtnFunction2(eraserBtn);
pencilMode = false;
BtnFunction2(pencilBtn);
cubeMode = false;
BtnFunction2(cubeBtn);
bucketMode = false;
BtnFunction2(bucketBtn);
};

cubeBtn.onclick = function(){
BtnFunction1(cubeBtn);
cubeMode = true;
sliderR.value = 210;
sliderG.value = 255;
sliderB.value = 230;
palette.style.backgroundColor = `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;
//close other buttons
inkMode = false;
BtnFunction2(inkBtn);
techbowMode = false;
BtnFunction2(techBtn);
oilMode = false;
BtnFunction2(oilBtn);
rainbowMode = false;
BtnFunction2(rainbowBtn);
eraserMode = false;
BtnFunction2(eraserBtn);
pencilMode = false;
BtnFunction2(pencilBtn);
bucketMode = false;
BtnFunction2(bucketBtn);
};

rainbowBtn.onclick = function(){
 BtnFunction1(rainbowBtn);
rainbowMode = true;
palette.style.backgroundColor = "#ddd";
//close other buttons
techMode = false;
BtnFunction2(techBtn);
inkMode = false;
BtnFunction2(inkBtn);
oilMode = false;
BtnFunction2(oilBtn);
eraserMode = false;
BtnFunction2(eraserBtn);
pencilMode = false;
BtnFunction2(pencilBtn);
cubeMode = false;
BtnFunction2(cubeBtn);
bucketMode = false;
BtnFunction2(bucketBtn);
}

eraserBtn.onclick = function(){
BtnFunction1(eraserBtn);
eraserMode = true;
//close other buttons
techMode = false;
BtnFunction2(techBtn);
inkMode = false;
BtnFunction2(inkBtn);
oilMode = false;
BtnFunction2(oilBtn);
rainbowMode = false;
BtnFunction2(rainbowBtn);
pencilMode = false;
BtnFunction2(pencilBtn);
cubeMode = false;
BtnFunction2(cubeBtn);
bucketMode = false;
BtnFunction2(bucketBtn);
}

pencilBtn.onclick = function(){
BtnFunction1(pencilBtn);
pencilMode = true;
sliderR.value = 100;
sliderG.value = 100;
sliderB.value = 220;
sliderStroke.value = 25;
palette.style.backgroundColor = `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;
//close other buttons
techMode = false;
BtnFunction2(techBtn);
inkMode = false;
BtnFunction2(inkBtn);
oilMode = false;
BtnFunction2(oilBtn);
rainbowMode = false;
BtnFunction2(rainbowBtn);
eraserMode = false;
BtnFunction2(eraserBtn);
cubeMode = false;
BtnFunction2(cubeBtn);
bucketMode = false;
BtnFunction2(bucketBtn);
}

bucketBtn.onclick = function(){
bucketMode = true;
BtnFunction1(bucketBtn);

//close other buttons
techMode = false;
BtnFunction2(techBtn);
inkMode = false;
BtnFunction2(inkBtn);
oilMode = false;
BtnFunction2(oilBtn);
rainbowMode = false;
BtnFunction2(rainbowBtn);
eraserMode = false;
BtnFunction2(eraserBtn);
cubeMode = false;
BtnFunction2(cubeBtn);
pencilMode = false;
BtnFunction2(pencilBtn);

}

function BtnFunction1(obj) {
  obj.style.backgroundColor = "#80aaff";
  obj.style.color = "white";
   
}
function BtnFunction2(obj) {
  obj.style.backgroundColor = "#ddd";
  obj.style.color = "#444";
}


//Highlighter
svgdiv.addEventListener("mousedown",function(ev){
    console.log("mousedown");

    if(techMode===true){
    pathString = `M ${ev.offsetX},${ev.offsetY}`;
    mousePushed = true;
    paper.setStart();
    }

})
svgdiv.addEventListener("mouseup",function(ev){
    console.log("mouseup");
    mousePushed = false;
    
})
svgdiv.addEventListener("mousemove",function(ev){
    console.log("mousemove");
    if (mousePushed===true&techMode===true) {
        let colorString = `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;
        pathString = `${pathString} L ${ev.offsetX}, ${ev.offsetY} `;
        raphealPath = paper.path(pathString).attr({"stroke":colorString, "stroke-width":sliderStroke.value, "stroke-opacity": opacity.value*0.8});
        var highlighterSet = setFinish();
        action.push(highlighterSet);
        pathString = `M ${ev.offsetX},${ev.offsetY}`;
    }

}) 

//Chinese Ink
let offset = 0;
var previousEvent = false;
let pathString1;
//get mouse moving speed
function makeVelocityCalculator(e_init, e) {
        var x = e_init.clientX, new_x,new_y,new_t,
            x_dist, y_dist, interval,velocity,
            y = e_init.clientY,
            t;
    if (e === false) {return 0;}
    t = e.time;
       new_x = e.clientX;
       new_y = e.clientY;
       new_t = Date.now();
       x_dist = new_x - x;
                y_dist = new_y - y;
                interval = new_t - t;
            // update values:
            x = new_x;
            y = new_y;
            velocity = Math.sqrt(x_dist*x_dist+y_dist*y_dist)/interval;
            return velocity;
    }
    
svgdiv.addEventListener("mousedown",function(ev){
    console.log("mousedown");

    if(inkMode===true){
    
    let colorString = `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;
     
    pathStringA = `M ${ev.offsetX},${ev.offsetY}`;
    pathStringB = `M ${ev.offsetX+2},${ev.offsetY+2}`;
    pathStringC = `M ${ev.offsetX-2},${ev.offsetY-2}`;

    mousePushed = true;
 paper.setStart();}
});
svgdiv.addEventListener("mousemove",function(ev){
    console.log("mouseup");
    
    let colorString = `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;
    if (mousePushed===true && inkMode===true) {
    
    ev.time = Date.now();
    var res;
    res = makeVelocityCalculator( ev, previousEvent);
    previousEvent = ev;
/*     document.getElementById("result").innerHTML= res;   */ 
    
    if (res>1.5) {res = 1.5;}
    if (res<0.1){res = 0.1;} 
    

    pathString1 = `${pathStringA}, T ${ev.offsetX}, ${ev.offsetY}`;
    pathString2 = `${pathStringB}, T ${ev.offsetX+5*res}, ${ev.offsetY+5*res}`;
    pathString3 = `${pathStringC}, T ${ev.offsetX+8*res}, ${ev.offsetY+8*res}`;
    
   path1 = paper.path(pathString1).attr({"stroke":colorString, "stroke-width":(sliderStroke.value-12*res), "stroke-opacity": 1,"stroke-linecap": "round", "stroke-linejoinstring":"round"});
   path2 = paper.path(pathString2).attr({"stroke":colorString, "stroke-width":(sliderStroke.value-10*res), "stroke-opacity": 1,"stroke-linecap": "round", "stroke-linejoinstring":"round"});
   path3 = paper.path(pathString3).attr({"stroke":colorString, "stroke-width":(sliderStroke.value-8*res), "stroke-opacity": 1,"stroke-linecap": "round", "stroke-linejoinstring":"round"});

//update new starting point
pathStringA = `M ${ev.offsetX}, ${ev.offsetY}`;
pathStringB = `M ${ev.offsetX+5*res}, ${ev.offsetY+5*res}`;
pathStringC = `M ${ev.offsetX+8*res}, ${ev.offsetY+8*res}`;
    
    }
})
svgdiv.addEventListener("mouseup",function(ev){
    mousePushed = false;
    var inkset = paper.setFinish();
    action.push(inkset); 
})



//Oil Painting
let s = sliderStroke.value/2;
let brushString=[];
let brushPath=[];
let circles=[];

svgdiv.addEventListener("mousedown",function(ev){
    
    if(oilMode===true){
    
     for(i=0; i<5; i++)
    {
      let xoff = Math.random()*sliderStroke.value-s;
      let yoff = Math.random()*sliderStroke.value-s;
      console.log("xoff and yoff are "+xoff+" "+yoff);
      if (xoff * xoff + yoff * yoff< s * s * 4 )
      { 
        //strokeWeight(s/2)
       let colorString = `rgb(${sliderR.value+50*yoff/s}, ${sliderG.value+50*xoff/s}, ${sliderB.value})`;
         brushString[i] = `M ${ev.offsetX+xoff}, ${ev.offsetY+yoff}`; 
        
      }
    } 
 mousePushed = true;
 paper.setStart();}
});


svgdiv.addEventListener("mousemove",function(ev){

    if (mousePushed===true&oilMode===true) {
    
    for(i=0; i<4; i++)
    {
       xoff = Math.random()*sliderStroke.value-s;
       yoff = Math.random()*sliderStroke.value-s;
       
       
      console.log("xoff and yoff are "+xoff+" "+yoff);
/*       if (xoff * xoff + yoff * yoff< s*s*4)
      {  */
  
/*        let colorString = `rgb(${sliderR.value/15*(xoff+s)}, ${sliderG.value/15*(yoff+s)}, ${sliderB.value})`;
       console.log(colorString); */
        let colorString = `rgb(${sliderR.value}, ${sliderG.value+50*xoff/s}, ${sliderB.value+50*yoff/s})`;
        brushString[i] += `L ${ev.offsetX+xoff}, ${ev.offsetY+yoff}`;
        brushPath[i] = paper.path(brushString[i]).attr({"stroke":colorString, "stroke-width":sliderStroke.value/2, "stroke-opacity": opacity.value,"stroke-linecap": "square", "stroke-linejoinstring":"round"});
        brushString[i] = `M ${ev.offsetX-xoff},${ev.offsetY+yoff}`;         
       
                  
/*        brushCircle=paper.circle(ev.offsetX+xoff,ev.offsetY+yoff,sliderStroke.value/3).attr({"fill":colorString,"stroke-width": 0, "opacity":opacity.value});  */
    }
    
    }
       
  

}) 

svgdiv.addEventListener("mouseup",function(ev){
    console.log("mouseup");
    if(mousePushed === true){
    mousePushed = false;
    for(i=0; i<5; i++)
    {
        brushString[i] = `Z`;

    }
    
    
    var oilset = paper.setFinish();
    action.push(oilset);
    }
})


//Pencil
svgdiv.addEventListener("mousedown",function(ev){
    console.log("mousedown");
    mousePushed = true;
 paper.setStart();
})
svgdiv.addEventListener("mousemove",function(ev){
    console.log("mouseup");
    let colorString = `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;
    if (mousePushed===true && pencilMode===true) {
    offset = sliderStroke.value;
    /*circle1 = paper.circle(ev.offsetX, ev.offsetY,offset/15).attr({"fill": colorString,"stroke-width": 0});*/
    circle2 = paper.circle(ev.offsetX+offset/10, ev.offsetY+offset/10,offset/15).attr({"fill": colorString,"stroke-width": 0});
    circle3 = paper.circle(ev.offsetX-offset/10, ev.offsetY-offset/10,offset/15).attr({"fill": colorString,"stroke-width": 0});
    circle4 = paper.circle(ev.offsetX-offset/10, ev.offsetY+offset/10,offset/15).attr({"fill": colorString,"stroke-width": 0});
    circle5 = paper.circle(ev.offsetX+offset/10, ev.offsetY-offset/10,offset/15).attr({"fill": colorString,"stroke-width": 0});

    
    
    }
})
svgdiv.addEventListener("mouseup",function(ev){
    mousePushed = false;
    var pencilset = paper.setFinish();
    action.push(pencilset); 
})



//Cubism
svgdiv.addEventListener("mousedown",function(ev){
    console.log("mousedown");
    mousePushed = true;
    
    let colorString = `rgb(${sliderR.value*Math.random()}, ${sliderG.value+20*Math.random()}, ${sliderB.value-20*Math.random()})`;
    if (mousePushed===true && cubeMode===true) {
    let h = Math.random()*sliderStroke.value*10;
    let w = Math.random()*sliderStroke.value*10;
    cube = paper.rect(ev.offsetX-w/2, ev.offsetY-h/2,w,h).attr({"fill": colorString,"stroke-width": 0});
 paper.setStart();}
})
svgdiv.addEventListener("mousemove",function(ev){
    
    let colorString = `rgb(${sliderR.value*Math.random()}, ${sliderG.value+20*Math.random()}, ${sliderB.value-20*Math.random()})`;
    if (mousePushed===true && cubeMode===true) {

    let h = Math.random()*sliderStroke.value*10;
    let w = Math.random()*sliderStroke.value*10;
    cube = paper.rect(ev.offsetX-w/2, ev.offsetY-h/2,w,h).attr({"fill": colorString,"stroke-width": 0});
    
    
    }
})
svgdiv.addEventListener("mouseup",function(ev){
    mousePushed = false;
    var cubeset = paper.setFinish();
    action.push(cubeset); 
})



//Rainbow
let startTime = 0;
let time = 0;
svgdiv.addEventListener("mousedown",function(ev){
    console.log("mousedown");
    startTime = Date.now();
    mousePushed = true;
 paper.setStart();
})
svgdiv.addEventListener("mousemove",function(ev){
    console.log("mouseup");

    time = Date.now()-startTime;
    if (mousePushed===true&&rainbowMode===true) {
    let colorString = `hsl(${time%360}, 30%, 70%)`;
   console.log(colorString);
   console.log(time);
    circle = paper.circle(ev.offsetX, ev.offsetY,sliderStroke.value).attr({"fill":colorString,"stroke-width": 0});
    
    }
})
svgdiv.addEventListener("mouseup",function(ev){
    mousePushed = false;
    var rainbowset = paper.setFinish();
    action.push(rainbowset); 
})



//bg color
svgdiv.addEventListener("mousemove",function(ev){
    if(bucketMode ===true){
    svgdiv.style.cursor = "alias";  

    }else{
    svgdiv.style.cursor = "crosshair";  
    }

})
svgdiv.addEventListener("click",function(ev){
    if(bucketMode ===true){
     let bgColor = `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;
     bg= paper.rect(0,0,paper.width,paper.height).attr({"fill": bgColor});
     action.push(bg);
    }

})





//Eraser
svgdiv.addEventListener("mousedown",function(ev){
    console.log("mousedown");
    mousePushed = true;
 paper.setStart();
})
svgdiv.addEventListener("mousemove",function(ev){
    console.log("mouseup");

    if (mousePushed===true&& eraserMode===true) {
    circle = paper.circle(ev.offsetX, ev.offsetY,sliderStroke.value).attr({"fill":"#fff","stroke-width": 0});
    
    }
})
svgdiv.addEventListener("mouseup",function(ev){
    mousePushed = false;
    var eraserset = paper.setFinish();
    action.push(eraserset); 
})


//button to clear paper
let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function(ev){
    paper.clear();
});

//UNDO
let undoBtn = document.getElementById("undoBtn");
undoBtn.addEventListener("click", function(ev){
   action.pop().remove();
});


//Palette rect
let palette = document.getElementById("palette");
sliderR.addEventListener("input",function(ev){
palette.style.backgroundColor = `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;
});
sliderG.addEventListener("input",function(ev){
palette.style.backgroundColor = `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;
});
sliderB.addEventListener("input",function(ev){
palette.style.backgroundColor = `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;
});


