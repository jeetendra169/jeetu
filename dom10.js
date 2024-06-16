var pro = [
    {
      "productName": "Shanaya Premium Perfume",
      "popularity": 85,
      "rating": 4.5,
      "value": 200,
      "image": "https://french-factor.com/cdn/shop/files/Artboard1_a5622026-b150-4b08-86a0-54a98eaaefc9.jpg?v=1709645424&width=3000"
    },
    {
      "productName": "Shanaya Premium Perfume",
      "popularity": 78,
      "rating": 4.2,
      "value": 150,
      "image": "https://fanaticfashion.co.in/cdn/shop/files/2_d989c01c-1436-4e9e-8cb0-d863f3173685.jpg?v=1702377342"
    },
    {
      "productName": "Shanaya Premium Perfume",
      "popularity": 90,
      "rating": 4.8,
      "value": 300,
      "image": "https://zamzamperfumers.com/cdn/shop/files/Mukhallat_Al_Safa_1_1280x.jpg?v=1698666813"
    },
    {
      "productName": "Shanaya Premium Perfume",
      "popularity": 65,
      "rating": 3.9,
      "value": 120,
      "image": "https://habbana.com/cdn/shop/products/VV0889_1024x1024.jpg?v=1611767152"
    },
    {
      "productName": "Shanaya Premium Perfume",
      "popularity": 80,
      "rating": 4.4,
      "value": 250,
      "image": "https://www.aarfragrances.com/public/uploads/all/iMMNOOeyg37bcpF6KZsqXL6mn29MR4JJKXBDcQf9.jpg"
    },
    {
      "productName": "Shanaya Premium Perfume",
      "popularity": 92,
      "rating": 4.9,
      "value": 350,
      "image": "https://www.adilqadri.com/cdn/shop/files/Aqua_Shanaya_57e6ffe6-b2a8-4cc5-bfa6-2ef9f7ad4c84.jpg?v=1700739942&width=800"
    }
  ]

  var caontainer = '';
  

  pro.forEach(function(pro){
    caontainer +=` <div class=" img  w-full h-48 bg-blue-500 rounded-md overflow-y-hidden object-cover bg-center ">
                <img src="${pro.image}" alt="">

            </div>
           <div>
            <h1 class=" text-bold ">${pro.productName}</h1>
            <h1 class="text-xs">${pro.popularity}</h1>
            <h1 class="text-xs">${pro.rating}</h1>
            <h1 class="text-xs">${pro.value} </h1>

           </div>`;

  })

 var po = document.querySelector(".cards").innerHTML=caontainer;