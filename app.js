let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlides() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

function plusSlides(n) {
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    showSlides();
}

// Automatic slideshow
let slideInterval = setInterval(() => {
    plusSlides(1);
}, 2000); // Change slides every 2 seconds

// Pause automatic slideshow on button click
const prevButton = document.querySelector('.prevBtn');
const nextButton = document.querySelector('.nextBtn');

prevButton.addEventListener('click', () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 2000);
});

nextButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
      plusSlides(1);
  }, 2000);
});

















var store = [
  // Mens Unstitch Fabric  
  {
      id: 1,
      title: "Vision Dominant Unstitched Blended with Gift Box",
      price: 109.95,
      description:
        "Craft your wardrobe of essentials with the finest fabrics of GulAhmed Men’s Collection",
      category: "men's clothing",
      image: "images/men1.webp",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "AMBASSADOR PEACH  Blended with Gift Box ",
      price: 22.3,
      description:
      "Craft your wardrobe of essentials with the finest fabrics of GulAhmed Men’s Collection.", 
      category: "men's clothing",
      image:"images/men2.webp",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Pearl Unstitched Fabric Cotton with Gift Box",
      price: 55.99,
      description:
      "Craft your wardrobe of essentials with the finest fabrics of GulAhmed Men’s Collection.",  
      category: "men's clothing",
      image: "images/men3.webp",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Elite Unstitched Fabric Blended with Gift Box",
      price: 15.99,
      description:
        "Craft your wardrobe of essentials with the finest fabrics of GulAhmed Men’s Collection.",
        category: "men's clothing",
      image: "images/men4.webp",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title: "Affluence Unstitched Fabric Blended with Gift Box",
      price: 109.95,
      description:
        "Craft your wardrobe of essentials with the finest fabrics of GulAhmed Men’s Collection",
      category: "men's clothing",
      image: "images/men5.webp",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 6,
      title: "Pearl Unstitched Fabric Cotton with Gift Box ",
      price: 22.3,
      description:
      "Craft your wardrobe of essentials with the finest fabrics of GulAhmed Men’s Collection.", 
      category: "men's clothing",
      image: "images/men6.webp",
      rating: { rate: 4.3, count: 259 },
    },
    {
      id: 7,
      title: "GUL 90 Fresher Unstitched Fabric Blended with Gift Box",
      price: 55.99,
      description:
      "Craft your wardrobe of essentials with the finest fabrics of GulAhmed Men’s Collection.",  
      category: "men's clothing",
      image: "images/men7.webp",
      rating: { rate: 4.9, count: 500 },
    },
    {
      id: 8,
      title: "High Life Unstitched Fabric Blended with Gift Box",
      price: 15.99,
      description:
        "Craft your wardrobe of essentials with the finest fabrics of GulAhmed Men’s Collection.",
        category: "men's clothing",
      image: "images/men8.webp",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 9,
      title: "High Life Unstitched Fabric Blended with Gift Box",
      price: 15.99,
      description:
        "Craft your wardrobe of essentials with the finest fabrics of j. Men’s Collection.",
        category: "men's clothing",
      image: "images/men9.webp",
      rating: { rate: 2.1, count: 430 },
    },
    
    {
      id: 10,
      title: "KOREA KHAKI - COTTON UNSTITCHED FABRIC",
      price: 15.99,
      description:
        "Craft your wardrobe of essentials with the finest fabrics of j. Men’s Collection.",
        category: "men's clothing",
      image: "images/men10.webp",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 11,
      title: "High Life Unstitched Fabric Blended with Gift Box",
      price: 15.99,
      description:
        "Craft your wardrobe of essentials with the finest fabrics of j. Men’s Collection.",
        category: "men's clothing",
      image: "images/men11.webp",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 12,
      title: "High Life Unstitched Fabric Blended with Gift Box",
      price: 15.99,
      description:
        "Craft your wardrobe of essentials with the finest fabrics of j. Men’s Collection.",
        category: "men's clothing",
      image: "images/men12.webp",
      rating: { rate: 2.1, count: 430 },
    },
  
    {
      id: 13,
      title: "WHITE BLENDED UNSTITCHED FABRIC",
      price: 15.99,
      description:
        "Craft your wardrobe of essentials with the finest fabrics of j. Men’s Collection.",
        category: "men's clothing",
      image: "images/men13.webp",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 14,
      title: "RUST UNSTITCHED KAMEEZ SHALWAR FABRIC",
      price: 15.99,
      description:
        "Craft your wardrobe of essentials with the finest fabrics of j. Men’s Collection.",
        category: "men's clothing",
      image: "images/men14.webp",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 15,
      title: "WHITE BLENDED UNSTITCHED  FABRIC",
      price: 15.99,
      description:
        "Craft your wardrobe of essentials with the finest fabrics of j. Men’s Collection.",
        category: "men's clothing",
      image: "images/men15.webp",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 16,
      title: "BLUE BLENDED UNSTITCHED  FABRIC",
      price: 15.99,
      description:
        "Craft your wardrobe of essentials with the finest fabrics of j. Men’s Collection.",
        category: "men's clothing",
      image: "images/men16.webp",
      rating: { rate: 2.1, count: 430 },
    },
    
    
    // Womens Clothing
    
    {
      id: 1,
      title: "GREEN LAWN UNSTITCHED 1PC",
      price: 56.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women1.webp",
      rating: { rate: 2.6, count: 235 },
    },
   
    {
      id: 2,
      title: "RED CAMBRIC UNSTITCHED 2PC",
      price: 59.99,
      description:
        "Digital Printed Lawn Shirt: 1.8 Meters",
        category: "women's clothing",
      image: "images/women2.webp",
      rating: { rate: 2.7, count: 215 },
    },
    {
      id: 3,
      title: "MULTICOLOR LAWN UNSTITCHED 2PC",
      price: 26.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women3.webp",
      rating: { rate: 1.6, count: 135 },
    },
    {
      id: 4,
      title: "OFF WHITE LAWN UNSTITCHED 1PC",
      price: 46.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women4.webp",
      rating: { rate: 2.9, count: 335 },
    },
    {
      id: 5,
      title: "BROWN LAWN UNSTITCHED 2PC",
      price: 56.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women5.webp",
      rating: { rate: 3.6, count: 335 },
    },
    {
      id: 6,
      title: "BLACK-WHITE LAWN UNSTITCHED 2PC",
      price: 56.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women6.webp",
      rating: { rate: 2.1, count: 215 },
    },
    {
      id: 7,
      title: "BLACK LAWN UNSTITCHED 3PC",
      price: 56.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women7.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 8,
      title: "WHITE LAWN UNSTITCHED 3PC",
      price: 36.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women8.webp",
      rating: { rate: 4.6, count: 135 },
    },
    {
      id: 9,
      title: "PRINTED LAWN 3PCS UNSTITCHED",
      price: 56.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women9.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 10,
      title: "PRINTED LAWN 3PCS UNSTITCHED",
      price: 56.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women10.webp",
      rating: { rate: 1.6, count: 135 },
    },
    {
      id: 11,
      title: "PRINTED LAWN 3PCS UNSTITCHED",
      price: 56.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women11.webp",
      rating: { rate: 3.6, count: 285 },
    },
    {
      id: 12,
      title: "PRINTED LAWN 3PCS UNSTITCHED",
      price: 56.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women12.webp",
      rating: { rate: 2.7, count: 215 },
    },

    {
      id: 13,
      title: "PRINTED LAWN 3PCS UNSTITCHED",
      price: 26.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women13.webp",
      rating: { rate: 1.6, count: 135 },
    },
    {
      id: 14,
      title: "PRINTED LAWN 3PCS UNSTITCHED",
      price: 46.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women14.webp",
      rating: { rate: 2.9, count: 335 },
    },
    {
      id: 15,
      title: "PRINTED LAWN 3PCS UNSTITCHED",
      price: 56.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women15.webp",
      rating: { rate: 3.6, count: 335 },
    },
    {
      id: 16,
      title: "PRINTED LAWN 3PCS UNSTITCHED",
      price: 56.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women16.webp",
      rating: { rate: 2.1, count: 215 },
    },
    {
      id: 17,
      title: "PRINTED LAWN 3PCS UNSTITCHED",
      price: 56.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women17.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 18,
      title: "PRINTED LAWN 3PCS UNSTITCHED",
      price: 36.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women18.webp",
      rating: { rate: 4.6, count: 135 },
    },
    {
      id: 19,
      title: "PRINTED LAWN 3PCS UNSTITCHED",
      price: 56.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women19.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 20,
      title: "PRINTED LAWN 3PCS UNSTITCHED",
      price: 56.99,
      description:
        "Digital Printed Lawn Shirt: 1.75 Meters",
        category: "women's clothing",
      image: "images/women20.webp",
      rating: { rate: 1.6, count: 135 },
    },
    // KIDS Boys
    
    {
      id: 1,
      title: "SUMMER'23 BOYS CASUAL KURTA PAJAMA MAROON",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Boys",
      image: "images/kid1.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 2,
      title: "SUMMER'23 BOYS PLAIN KURTA YELLOW",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Boys",
      image: "images/kid2.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 3,
      title: "SUMMER'23 BOYS PRINTED KURTA RED",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Boys",
      image: "images/kid3.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 4,
      title: "SUMMER'23 BOYS PLAIN KURTA ORANGE",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Boys",
      image: "images/kid4.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 5,
      title: "TEENS PLAIN KURTA BLUE COLOR",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Boys",
      image: "images/kid5.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 6,
      title: "PRE WINTER'23 BOYS SEMI FORMAL KURTA",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Boys",
      image: "images/kid6.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 7,
      title: "PRE WINTER'23 BOYS CASUAL KURTA PAJAMA",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Boys",
      image: "images/kid7.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 8,
      title: "PRE WINTER'23 BOYS CASUAL KURTA PAJAMA",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Boys",
      image: "images/kid8.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 9,
      title: "BOYS KURTA PAJAMA DEEP BLUE ",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Boys",
      image: "images/kid9.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 10,
      title: "BOYS KURTA PAJAMA MIDNIGHT BLUE",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Boys",
      image: "images/kid10.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 11,
      title: "BOYS KURTA PAJAMA MAROON",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Boys",
      image: "images/kid11.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 12,
      title: "TEENS KURTA PAJAMA TEAL BLUE",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Boys",
      image: "images/kid12.webp",
      rating: { rate: 2.6, count: 235 },
    },
    // KIDS GIRLS

    {
      id: 1,
      title: "FESTIVE'23 GIRLS TEENS 3PC STITCHED SUIT",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Girls",
      image: "images/kidg1.webp",
      rating: { rate: 2.6, count: 235 },
    },
    
    {
      id: 2,
      title: "FESTIVE'23 GIRLS TEENS 3PC STITCHED SUIT",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Girls",
      image: "images/kidg2.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 3,
      title: "SUMMER'23 SICILIAN WHEEL 1PC STITCH KURTI",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Girls",
      image: "images/kidg3.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 4,
      title: "SUMMER'23 CLOUD BURST PINK 1PC STITCH KURTI",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Girls",
      image: "images/kidg4.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 5,
      title: "SUMMER'23 CLOUD BURST PINK 1PC STITCH KURTI",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Girls",
      image: "images/kidg5.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 6,
      title: "SUMMER'23 GIRLS 2PC STITCHED SUIT",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Girls",
      image: "images/kidg6.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 7,
      title: "SUMMER'23 DELICATE FERN 2PC ",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Girls",
      image: "images/kidg7.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 8,
      title: "SUMMER'23 COUDS BURS 1PC",
      price: 56.99,
      description:
        "Fabric: 100% Cotton",
        category: "Kid's Girls",
      image: "images/kidg8.webp",
      rating: { rate: 2.6, count: 235 },
    },
    // FRAGRANCES
    {
      id: 1,
      title: "THE PERSIAN COLLECTION ",
      price: 36.99,
      description:
        "MAIN ACCORDS: AMBER, MUKSY, HONEY, SWEET, WOODY, FLORAL FRUITY, POWDERY,SOFT SPICY.",
        category: "Fragrances",
      image: "images/frag1.webp",
      rating: { rate: 2.6, count: 235 },
    },
    
    {
      id: 2,
      title: "BLACK STALLION",
      price: 36.99,
      description:
        "MAIN ACCORDS: AMBER, MUKSY, HONEY, SWEET, WOODY, FLORAL FRUITY, POWDERY,SOFT SPICY.",
        category: "Fragrances",
      image: "images/frag2.webp",
      rating: { rate: 2.6, count: 235 },
    },
    
    {
      id: 3,
      title: "MIDNIGHT OUD",
      price: 36.99,
      description:
        "MAIN ACCORDS: AMBER, MUKSY, HONEY, SWEET, WOODY, FLORAL FRUITY, POWDERY,SOFT SPICY.",
        category: "Fragrances",
      image: "images/frag3.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 4,
      title: "AZBAH",
      price: 36.99,
      description:
        "MAIN ACCORDS: AMBER, MUKSY, HONEY, SWEET, WOODY, FLORAL FRUITY, POWDERY,SOFT SPICY.",
        category: "Fragrances",
      image: "images/frag4.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 5,
      title: "SANDAL DREAM",
      price: 36.99,
      description:
        "MAIN ACCORDS: AMBER, MUKSY, HONEY, SWEET, WOODY, FLORAL FRUITY, POWDERY,SOFT SPICY.",
        category: "Fragrances",
      image: "images/frag5.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 6,
      title: "BELLA Pour Femme",
      price: 36.99,
      description:
        "MAIN ACCORDS: AMBER, MUKSY, HONEY, SWEET, WOODY, FLORAL FRUITY, POWDERY,SOFT SPICY.",
        category: "Fragrances",
      image: "images/frag6.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 7,
      title: "GREAT SUMMIT",
      price: 36.99,
      description:
        "MAIN ACCORDS: AMBER, MUKSY, HONEY, SWEET, WOODY, FLORAL FRUITY, POWDERY,SOFT SPICY.",
        category: "Fragrances",
      image: "images/frag7.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 8,
      title: "MAN BY A.M",
      price: 36.99,
      description:
        "MAIN ACCORDS: AMBER, MUKSY, HONEY, SWEET, WOODY, FLORAL FRUITY, POWDERY,SOFT SPICY.",
        category: "Fragrances",
      image: "images/frag8.webp",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 9,
      title: "JANAN PLATINUM",
      price: 36.99,
      description:
        "MAIN ACCORDS: AMBER, MUKSY, HONEY, SWEET, WOODY, FLORAL FRUITY, POWDERY,SOFT SPICY.",
        category: "Fragrances",
      image: "images/frag9.webp",
      rating: { rate: 2.6, count: 235 },
    },{
      id: 10,
      title: "FRONTLINE",
      price: 36.99,
      description:
        "MAIN ACCORDS: AMBER, MUKSY, HONEY, SWEET, WOODY, FLORAL FRUITY, POWDERY,SOFT SPICY.",
        category: "Fragrances",
      image: "images/frag10.webp",
      rating: { rate: 2.6, count: 235 },
    },{
      id: 11,
      title: "MIKA",
      price: 36.99,
      description:
        "MAIN ACCORDS: AMBER, MUKSY, HONEY, SWEET, WOODY, FLORAL FRUITY, POWDERY,SOFT SPICY.",
        category: "Fragrances",
      image: "images/frag11.webp",
      rating: { rate: 2.6, count: 235 },
    },{
      id: 12,
      title: "BLUE SOUL",
      price: 36.99,
      description:
        "MAIN ACCORDS: AMBER, MUKSY, HONEY, SWEET, WOODY, FLORAL FRUITY, POWDERY,SOFT SPICY.",
        category: "Fragrances",
      image: "images/frag12.webp",
      rating: { rate: 2.6, count: 235 },
    },

  ];
  
          
  
  function populateSelect() {
    var select = document.getElementById("categorySelect");
    var categories = [];
    store.forEach(function(item) {
        if (!categories.includes(item.category)) {
            categories.push(item.category);
            var option = document.createElement("option");
            option.text = item.category;
            option.value = item.category;
            select.appendChild(option);
        }
    });
  }
  function displayAllItems() {
    var storeItemsDiv = document.getElementById("storeItems");
    storeItemsDiv.innerHTML = ""; 
    store.forEach(function(item) {
        var obj = `<div class="item"> <button id="off"> -40% </button>
            <img src=" ${item.image}" alt="${item.title}"  id = 'img'>
            <br><br><br>
            <h2>${item.title}</h2>  
            <p>${item.description}</p>
            <p>Category: ${item.category}</p>
            <p>Price: $${item.price}</p>
            <p>Rating: ${item.rating.rate}<i class="fa-solid fa-star fa-lg" style="color: #FFD43B;"></i><i class="fa-solid fa-star fa-lg" style="color: #FFD43B;"></i><i class="fa-solid fa-star fa-lg" style="color: #FFD43B;"></i><i class="fa-solid fa-star-half fa-lg" style="color: #FFD43B;"></i><i class="fa-regular fa-star fa-lg" style="color: #FFD43B;"></i></p>
            <p>Reviews: ${item.rating.count}</p>
            <button id ="btn">Add to Cart 🛒</button>
        </div>`;
        storeItemsDiv.innerHTML += obj;
    });
  }
  function filterStore() {
    var selectedCategory = document.getElementById("categorySelect").value;
    var storeItemsDiv = document.getElementById("storeItems");
    storeItemsDiv.innerHTML = ""; 
    store.forEach(function(item) {
        if (selectedCategory === "all" || item.category === selectedCategory) {
            var obj = `<div class="item">
                <img src="${item.image}" alt="${item.title}" id = 'img'>
                <br><br><br><br>
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <p>Category: ${item.category}</p>
                <p>Price: $${item.price}</p>
                <p>Rating: ${item.rating.rate}</p>
                <p>Reviews: ${item.rating.count}</p>
                <button>Add to cart </button>
            </div>`;
            storeItemsDiv.innerHTML += obj;
        }
    });
  }
  populateSelect();
  displayAllItems();
  function attachCartEventListeners() {
    let cartBtn = document.querySelectorAll('#btn');
    for (let i = 0; i < cartBtn.length; i++) {
        cartBtn[i].addEventListener('click', (event) => {
            const productIndex = event.target.getAttribute('data-index');
            Swal.fire({
              title: "Do you want to Place your Order?",
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: "YES",
              denyButtonText: `NO`
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                Swal.fire("Your Order has been Placed", "", "success");
              } else if (result.isDenied) {
                Swal.fire("Your Order has been Cancelled", "", "info");
              }
            });
        });
    }
  }
  
  attachCartEventListeners();



