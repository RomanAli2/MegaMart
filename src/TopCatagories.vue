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
export default{
  name:"TopCatagories",
  data(){
    return{
      TopCatagories:[
          {
         title: "C type charger 50v",
          price: "Rs. 1,999",
          reviews: 50,
          image: "/top catgeries/download (1).jpg",
      },
       {
         title: "Mobiles phone Cover",
          price: "Rs. 500",
          reviews: 10,
          image: "/top catgeries/download (2).jpg",
      },
      {
         title: "HeadPhones",
          price: "Rs. 2,000",
          reviews: 210,
          image: "/top catgeries/download (3).jpg",
      },
        {
         title: "HeadPhones",
          price: "Rs. 2,599",
          reviews: 61,
          image: "/top catgeries/download (4).jpg",
      },
        {
         title: "Hand Free",
          price: "Rs. 600",
          reviews: 71,
          image: "/top catgeries/download (5).jpg",
      },
       {
         title: "Hand Free",
          price: "Rs. 1,599",
          reviews: 42,
          image: "/top catgeries/download (6).jpg",
      },
       {
         title: "Gaming Fan",
          price: "Rs. 5,000",
          reviews: 59,
          image: "/top catgeries/download (7).jpg",
      },
      {
         title: "Power Bank",
          price: "Rs. 9,999",
          reviews: 26,
          image: "/top catgeries/download (8).jpg",
      },
        {
         title: "Power Bank",
          price: "Rs. 11,599",
          reviews: 61,
          image: "/top catgeries/download (9).jpg",
      },
        {
         title: "Mobile Charger",
          price: "Rs. 700",
          reviews: 71,
          image: "/top catgeries/download.jpg",
      },
      ]
    }

  }
}
</script>