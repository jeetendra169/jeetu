for(var i=0;i<105;i++){
    var bubble = document.createElement("div");
    bubble.textContent = Math.floor(Math.random()*100);
    // console.log(bubble);
    bubble.classList.add(
        "w-20",
        "h-20",
        "bg-green-500",
        "text-3xl",
        "flex",
        "items-center",
        "justify-center",
        "rounded-full",
        "cursor-pointer"
    )
    document.querySelector(".bubbles").appendChild(bubble);
    bubble.addEventListener("click",function(){
        bubble.classList.add("bg-white");
    })
}