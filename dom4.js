var container="";
for(var i=0;i<=51;i++){
    var num=Math.floor(Math.random()*100);


    var red=Math.floor(Math.random()*256);
    var green=Math.floor(Math.random()*256);
    var blue=Math.floor(Math.random()*256);

    container +=`<div  style="background-color:rgb(${red},${green},${blue});" class="bubbles w-20 h-20 bg-green-500 rounded-full flex justify-center items-center">${num}</div>`;

}
document.querySelector("bubbles").innerHTML=container;