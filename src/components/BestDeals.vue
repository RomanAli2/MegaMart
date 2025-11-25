<template>
  <div class="best-deals w-full">
    <div class="headings mx-auto px-4 py-1 flex items-center justify-between">
      <span class="text-sm sm:text-base">
        Grab the best deal on <strong class="text-sky-400">Smart Phones</strong>
      </span>
      <RouterLink to="/"
       
        class="cursor-pointer bg-transparent outline-none text-sm sm:text-base"
      > View less <i class="fa-solid fa-angle-right text-sky-400"></i>

       
      </RouterLink>
    </div>

    <!-- Responsive Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <!-- CARD LOOP -->
      <div
        v-for="(phone, index) in phones"
        :key="index"
        class="bg-white shadow-md p-3 rounded-xl hover:shadow-lg transition cursor-pointer 
               mx-auto w-full max-w-[180px] h-[300px]"
      >
        <img
          :src="phone.image"
          class="w-full h-40 object-cover rounded-lg"
        />

        <h3 class="mt-3 font-semibold text-gray-700 text-sm">
          {{ phone.title }}
        </h3>
        <p class="text-lg font-bold text-sky-500">
          {{ phone.price }}
        </p>
        <p class="text-yellow-400 text-sm">
          ⭐⭐⭐⭐⭐ ({{ phone.reviews }} reviews)
        </p>

        <button
          class="mt-2 w-full bg-sky-500 text-white py-1.5 rounded-lg hover:bg-sky-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "BestDeals",
  data() {
    return {
      phones: [
  // Row 1
  {
    id: 1,
    title: "Tecno 6-128",
    price: "Rs. 45,999",
    reviews: 110,
    image: "/phones/download (3).jpg",
  },
  {
    id: 2,
    title: "Oppo 4-64",
    price: "Rs. 39,999",
    reviews: 40,
    image: "/phones/download (1).jpg",
  },
  {
    id: 3,
    title: "Realme 4-64",
    price: "Rs. 29,500",
    reviews: 30,
    image: "/phones/download.jpg",
  },
  {
    id: 4,
    title: "One Plus 8-128",
    price: "Rs. 52,000",
    reviews: 51,
    image: "/phones/images (2).jpg",
  },
  {
    id: 5,
    title: "Samsung 4-64",
    price: "Rs. 25,000",
    reviews: 75,
    image: "/phones/images (5).jpg",
  },

  // Row 2
  {
    id: 6,
    title: "One Plus 6-128",
    price: "Rs. 85,999",
    reviews: 110,
    image: "/phones/images (6).jpg",
  },
  {
    id: 7,
    title: "Oppo 4-64",
    price: "Rs. 59,999",
    reviews: 40,
    image: "/phones/images (7).jpg",
  },
  {
    id: 8,
    title: "Oppo 4-64",
    price: "Rs. 39,500",
    reviews: 30,
    image: "/phones/images (8).jpg",
  },
  {
    id: 9,
    title: "Samsung 8-256",
    price: "Rs. 51,000",
    reviews: 51,
    image: "/phones/images (9).jpg",
  },
  {
    id: 10,
    title: "One Plus 4-64",
    price: "Rs. 65,000",
    reviews: 75,
    image: "/phones/images.jpg",
  },

  // Row 3
  {
    id: 11,
    title: "Vivo 6-128",
    price: "Rs. 45,999",
    reviews: 110,
    image: "/phones/new1.jpg",
  },
  {
    id: 12,
    title: "Realme 4-64",
    price: "Rs. 29,999",
    reviews: 40,
    image: "/phones/new2.jpg",
  },
  {
    id: 13,
    title: "Samsung 4-64",
    price: "Rs. 25,500",
    reviews: 35,
    image: "/phones/new3.jpg",
  },
  {
    id: 14,
    title: "Samsung 4-64",
    price: "Rs. 22,000",
    reviews: 51,
    image: "/phones/new4.jpg",
  },
  {
    id: 15,
    title: "Vivo 6-128",
    price: "Rs. 45,000",
    reviews: 75,
    image: "/phones/new5.jpg",
  },

  // Row 4
  {
    id: 16,
    title: "Vivo 6-128",
    price: "Rs. 55,999",
    reviews: 33,
    image: "/phones/new6.jpg",
  },
  {
    id: 17,
    title: "Realme 4-64",
    price: "Rs. 36,999",
    reviews: 40,
    image: "/phones/new7.jpg",
  },
  {
    id: 18,
    title: "Q Mobile 4-64",
    price: "Rs. 23,500",
    reviews: 21,
    image: "/phones/new8.jpg",
  },
  {
    id: 19,
    title: "POCO 4-64",
    price: "Rs. 30,000",
    reviews: 51,
    image: "/phones/new9.jpg",
  },
  {
    id: 20,
    title: "Redmi 4-128",
    price: "Rs. 45,000",
    reviews: 75,
    image: "/phones/new10.jpg",
  },
]
    };
    
  },
};

</script>