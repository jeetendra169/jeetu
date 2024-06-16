var arr =[
    {
        name:"jeetu",
        Image:"https://images.unsplash.com/photo-1649893241479-aeda9d947429?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"a man af  25",
        statuss:"friends",

    },
    {
        name:"jaya",
        Image:"https://images.unsplash.com/photo-1649893241479-aeda9d947429?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"beautiful and harming",
        statuss:"strangers"

    },
    {
        name:"jeetu",
        Image:"https://images.unsplash.com/photo-1649893241479-aeda9d947429?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"lovvely  heart",
        statuss:"strrangers"

    },
];
var container = "";
arr.forEach(function(person){
    container +=`<div class=" card  w-52 p-4 rounded-md bg-zinc-700 text-whte">
    
    <div class="img w-10 h-10   rounded-full overflow-hidden">
        <img  class="w-full   h-full oject-coverr" src="${person.image}" alt="">
    </div>
    <h2  class="text-2xl mt-2">${person.name}</h2>
    <p class="ext-xs  mb-5">${person.desc}</p>
    <button class="text-xs px-3 py-2 ${person.status==="stranger"? ""}"></button>
    
    
    </div>`
})