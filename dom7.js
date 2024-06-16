var arr = [
   {
      name:"jeetendra",
      Image:"https://images.unsplash.com/photo-1712857329031-eecb5980eec7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc:"a mane of 21",
      status:"stangers",
   },
   {
      name:"Lokendra",
      Image:"https://plus.unsplash.com/premium_photo-1715876234462-b44ecef4ea8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNDh8fHxlbnwwfHx8fHw%3D",
      desc:" a mane of 19",
      status:"stangers",
   },
   {
      name:"AMAR",
      Image:"https://images.unsplash.com/photo-1712847331906-fac48177f9f7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc:"a mane of 20",
      status:"stangers",
   }
];

function print(){
   var container = '';
arr.forEach(function(value, index){
   container+=`<div class=" card w-32 p-2 bg-zinc-400 rounded-md">
   <div class="img w-10 h-10 rounded-full bg-red-500 overflow-heddin ">
       <img class="w-full h-full rounded-full object-cover" src="${value.Image}" alt="">
   </div>
   <h2 class="mb-1">${value.name}</h2>
   <p class="mb-1 text-xs"> ${value.desc} </p>
   <button id="${index}" class="btn text-xs px-2 py-1 rounded-md ${value.status === "stangers" ? "bg-blue-500" : (value.status === "request sent" ? "bg-yellow-500" : "bg-red-500")} ">
   ${value.status === "stangers" ? "Add Friend" : (value.status === "Request Sent" ? "Request Sent" : "Remove Friend")}</button>
</div>
`
});
document.querySelector(".cards").innerHTML = container;
}
print();

var timer ;
document.querySelector(".cards").addEventListener("click", function (e) {
   if(arr[e.target.id].status === "strangers"){
      arr[e.target.id].status = "request sent";

      let rnnum = Math.floor(Math.random() * 10);
     timer =setTimeout(function(){
         arr[e.target.id].status = "friend";
         print();

      },rnnum*1000);
   }
   else{
      arr[e.target.id].status = "strangers";
      clearTimeout(timer);
   }


   print();

   
   
   
});
