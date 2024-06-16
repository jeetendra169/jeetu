

const names = [
    "Emma",
    "Liam",
    "Olivia",
    "Noah",
    "Ava",
    "William",
    "Isabella",
    "James",
    "Sophia",
    "Benjamin",
    "Mia",
    "Oliver",
    "Charlotte",
    "Elijah",
    "Amelia",
    "Lucas",
    "Harper",
    "Mason",
    "Evelyn",
    "Logan",
    "Abigail",
    "Alexander",
    "Emily",
    "Ethan",
    "Elizabeth",
    "Jacob",
    "Mila",
    "Michael",
    "Ella",
    "Daniel",
    "Avery",
    "Henry",
    "Sofia",
    "Jackson",
    "Camila",
    "Sebastian",
    "Aria",
    "Jack",
    "Scarlett",
    "Aiden",
    "Victoria",
    "Matthew",
    "Madison",
    "Samuel",
    "Luna",
    "David",
    "Grace",
    "Joseph",
    "Chloe",
    "Carter",
    "Penelope"
  ];
     
    function print(usernames){
    var container = "";
    usernames.forEach(function (name){
      container +=` <h3 class="px-3 py-2 text-lg text-zinc-300 tracking-tight ">${name}</h3>`
  
    }); 
    document.querySelector(".scrollercustom").innerHTML = container;
  }
  
  print(names);
  
  var input = document.querySelector("input");
  
  input.addEventListener("input",function(){
      var ans = names.filter(function(name){
          return name.toLowerCase().startsWith(input.value.toLowerCase());
      });
  
      print(ans);
  });