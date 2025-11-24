<template>
  <!-- Best deals section -->
  <div class="best-deals w-full">
    <div class="headings mx-auto px-4 py-1 flex items-center justify-between">
      <span class="text-sm sm:text-base">
        Grab the best deal on <strong class="text-sky-400">Smart Phones</strong>
      </span>
      <RouterLink to="/best-deals"
       
        class="cursor-pointer bg-transparent outline-none text-sm sm:text-base"
      > View all <i class="fa-solid fa-angle-right text-sky-400"></i>

       
      </RouterLink>
    </div>

    <!--  Best Deals -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <!-- CARD LOOP -->
       
      <div
        v-for="(phone, index) in phones"
        :key="index"
        class="bg-white shadow-md p-3 rounded-xl hover:shadow-lg transition cursor-pointer 
               mx-auto w-full max-w-[180px] h-[300px]"
      >
        <img
          :src=" phone.image "
          class="w-full h-40 object-cover rounded-lg"
          @click="$router.push(`/deatil-page`)"
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
  <br />
  <br>
  <br>
  <div class="top catagories w-full">
    <div class="headings mx-auto px-4 py-1 flex items-center justify-between">
      <span class="text-sm sm:text-base">
       Shop from <strong class="text-sky-400">Top Catagories</strong>
      </span>
      <RouterLink to="/top-catagories"
       
        class="cursor-pointer bg-transparent outline-none text-sm sm:text-base"
      > View all <i class="fa-solid fa-angle-right text-sky-400"></i>

       
      </RouterLink>
    </div>

    <!--  Top Catagories -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <!-- CARD LOOP -->
      <div
        v-for="(TopCatagories, index) in TopCatagories"
        :key="index"
        class="bg-white shadow-md p-3 rounded-xl hover:shadow-lg transition cursor-pointer 
               mx-auto w-full max-w-[180px] h-[300px]"
      >
        <img
          :src=" TopCatagories.image "
          class="w-full h-40 object-cover rounded-lg"
        />

        <h3 class="mt-3 font-semibold text-gray-700 text-sm">
          {{ TopCatagories.title }}
        </h3>
        <p class="text-lg font-bold text-sky-500">
          {{ TopCatagories.price }}
        </p>
        <p class="text-yellow-400 text-sm">
          ⭐⭐⭐⭐⭐ ({{ TopCatagories.reviews }} reviews)
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
import { ref } from 'vue';

export default {
  name: "BestDeals",
  data() {
    return {
    phones: [
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
    image: "/phones/download (2).jpg",
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
],


     TopCatagories: [
  {
    id: 101,
    title: "C type charger 50v",
    price: "Rs. 1,999",
    reviews: 50,
    image: "/top catgeries/download (1).jpg",
  },
  {
    id: 102,
    title: "Mobiles phone Cover",
    price: "Rs. 500",
    reviews: 10,
    image: "/top catgeries/download (2).jpg",
  },
  {
    id: 103,
    title: "HeadPhones",
    price: "Rs. 2,000",
    reviews: 210,
    image: "/top catgeries/download (3).jpg",
  },
  {
    id: 104,
    title: "HeadPhones",
    price: "Rs. 2,599",
    reviews: 61,
    image: "/top catgeries/download (4).jpg",
  },
  {
    id: 105,
    title: "Hand Free",
    price: "Rs. 600",
    reviews: 71,
    image: "/top catgeries/download (5).jpg",
  },
  {
    id: 106,
    title: "Hand Free",
    price: "Rs. 1,599",
    reviews: 42,
    image: "/top catgeries/download (6).jpg",
  },
  {
    id: 107,
    title: "Gaming Fan",
    price: "Rs. 5,000",
    reviews: 59,
    image: "/top catgeries/download (7).jpg",
  },
  {
    id: 108,
    title: "Power Bank",
    price: "Rs. 9,999",
    reviews: 26,
    image: "/top catgeries/download (8).jpg",
  },
  {
    id: 109,
    title: "Power Bank",
    price: "Rs. 11,599",
    reviews: 61,
    image: "/top catgeries/download (9).jpg",
  },
  {
    id: 110,
    title: "Mobile Charger",
    price: "Rs. 700",
    reviews: 71,
    image: "/top catgeries/download.jpg",
  },
]

    };
  },

};
//Top

</script>
