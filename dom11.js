var btn = document.querySelector("button");
var timer = document.querySelector("h1");
var growth = document.querySelector(".growth");

var grow =0;
btn.addEventListener("click", function(){
    var intarbale = setInterval(function(){
        grow++
        timer.innerHTML = grow +"%";
        growth.style.width = grow+"%";

    },40)

    setTimeout(function(){
        clearInterval(intarbale);
        
        btn.innerHTML = "Downloaded";
        
    },4000)

})