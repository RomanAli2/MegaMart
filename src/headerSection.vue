<template>
  <!-- Top small info bar -->
  <div class="bg-[#E6E6E6] text-sm font-extralight">
    <div class="container mx-auto px-4 py-1 flex items-center justify-between">
      <div class="text-xs">
        <span>Welcome to <span class="font-semibold">MegaMart!</span></span>
      </div>

      <div class="flex items-center gap-4 text-xs">
        <div class="hidden sm:flex items-center gap-2">
          <i class="fa-solid fa-location-dot text-sky-400"></i>
          <span>Delivery to <strong>423622</strong></span>
        </div>

        <div class="hidden sm:flex items-center gap-2">
          <i class="fa-solid fa-truck text-sky-400"></i>
          <span>Track your order</span>
        </div>

        <div class="hidden sm:flex items-center gap-2">
          <i class="fa-solid fa-gear text-sky-400"></i>
          <span>All Offers</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Main header / navbar -->
  <header class="bg-white shadow-sm">
    <div class="container mx-auto px-4 py-3 flex items-center gap-4 flex-wrap">
      <!-- Logo -->
      <div class="flex mx-4">
        <span class="text-2xl mt-1 text-sky-400 flex"><i class="fa-solid fa-shop"></i></span>
        <span class="text-2xl font-bold">MegaMart</span>
      </div>

      <!-- Search (center on desktop, full width on mobile) -->
      <div class="flex-1 md:px-6 w-full md:w-auto overflow-hidden">
        <div class="flex items-center gap-3">
          <div class="flex items-center w-full md:max-w-lg bg-[#E1EFF0] rounded-full px-3 py-2">
            <i class="fa-solid fa-magnifying-glass text-sky-400 mr-2"></i>
            <input
              aria-label="Search"
              type="text"
              placeholder="Search essentials more..."
              class="w-full bg-transparent focus:outline-none text-sm"
            />
          </div>

          <!-- Actions -->
          <div class="hidden sm:flex items-center gap-2">
         <button  
  @click="mode = userEmailvalue.length > 0 ? 'profile' : 'signuppage'"
  class="bg-[#F5F5F5] px-3 py-2 rounded text-sm flex items-center gap-2 hover:bg-[#ecebeb]"
>
  <i class="fa-solid fa-user text-sky-400"></i>

  <span class="text-xs" v-if="userEmailvalue.length > 0">{{ userEmailvalue }}</span>
  <span v-else>SignUp/Login</span>
</button>



            <button @click="mode='cart'" class="bg-[#F5F5F5] px-3 py-2 rounded text-sm flex items-center gap-2 hover:bg-[#ecebeb]">
              <i class="fa-solid fa-cart-shopping text-sky-400"></i>
              <span>Cart</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile actions (visible only on small screens) -->
      <div class="flex items-center gap-3 md:hidden">
        <button class="p-2 rounded hover:bg-[#ecebeb] bg-[#F5F5F5]"@click="mode = userEmailvalue.length > 0 ? 'profile' : 'signuppage'">
          <i class="fa-solid fa-user text-sky-400"></i>
        </button>
        <button @click="mode='cart'" class="p-2 rounded hover:bg-[#ecebeb] bg-[#F5F5F5]">
          <i class="fa-solid fa-cart-shopping text-sky-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Categories -->
  <nav class="container mx-auto px-4 py-4">
    <div class="flex justify-center gap-4 flex-wrap">
      <button class="bg-[#E1EFF0] px-4 py-2 rounded-sm text-sm">I Phones</button>
      <button class="bg-[#E1EFF0] px-4 py-2 rounded-sm text-sm">I Phone 13</button>
      <button class="bg-[#E1EFF0] px-4 py-2 rounded-sm text-sm">Samsung</button>
      <button class="bg-[#E1EFF0] px-4 py-2 rounded-sm text-sm">Smart Watch</button>
      <button class="bg-[#E1EFF0] px-4 py-2 rounded-sm text-sm">I Phone 16pro</button>
      <button class="bg-[#E1EFF0] px-4 py-2 rounded-sm text-sm">Google Pixel</button>
      <button class="bg-[#E1EFF0] px-4 py-2 rounded-sm text-sm">1 Plus</button>
    </div>
  </nav>

  <!-- Slider -->
  <section class="container mx-auto px-4">
    <div class="relative w-full overflow-hidden rounded-md">
      <div class="flex transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${index * 100}%)` }">
        <div v-for="(slide, i) in slides" :key="i" class="w-full flex shrink-0">
          <img :src="slide" :alt="`Slide ${i + 1}`" class="w-full h-56 sm:h-64 md:h-72 object-cover" />
        </div>
      </div>

      <!-- Prev / Next -->
      <button aria-label="Previous slide" class="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full text-xl" @click="prev">
        ‹
      </button>
      <button aria-label="Next slide" class="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full text-xl" @click="next">
        ›
      </button>
    </div>
  </section>

  <!-- Login / Signup forms centered -->
  <div v-if="mode==='showpage'"  class="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
    <form class="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
     
      <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">Welcome back to Megamart</h1>
      <label for="email" class="block text-gray-700">Email</label>
      <input type="email" v-model="UserEmail" placeholder="Enter Email" class="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400" required>
      
      <label for="Password" class="block text-gray-700">Password</label>
      <input type="password" v-model="UserPassword"  placeholder="Enter Password" class="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-sky-400" required>
      
      <button @click="saveData" type="button" class="w-full bg-sky-500 text-white py-3 rounded-md text-lg hover:bg-sky-600 transition duration-100">Login</button>
      
      <p class="text-center text-gray-600 mt-4">Don't have an account <a @click="mode='signuppage'" class="text-sky-500 hover:text-sky-700 cursor-pointer">Sign Up</a></p><a @click="mode=null" class="block font-bold text-center mt-4 text-red-500 hover:text-red-700 cursor-pointer">Close</a>

    </form>
  </div>

  <div v-if="mode==='signuppage'" class="fixed inset-0  backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
    <form class="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
      <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">Create Your Account</h1>
      
      <label for="name" class="block text-gray-700">Full Name</label>
      <input type="text" v-model="name" placeholder="Enter Full Name" class="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400" required>
      
      <label for="email" class="block text-gray-700">Email</label>
      <input type="email" v-model="UserEmail" placeholder="Enter Email" class="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400" >
      
      <label for="password" class="block text-gray-700">Password</label>
      <input type="password" v-model="UserPassword" placeholder="Enter Password" class="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-sky-400" required>
      
      <button type="button" @click="saveData" class="w-full bg-sky-500 text-white py-3 rounded-md text-lg hover:bg-sky-600 transition duration-300">Sign Up</button>
      
      <p class="text-center text-gray-600 mt-4">Already have an account <a @click="mode='showpage'" class="bg-transparent text-sky-500 hover:text-sky-700 cursor-pointer">Login</a>
      </p><a @click="mode=null" class="block text-center mt-4 font-bold text-red-500 hover:text-red-700 cursor-pointer">Close</a>

      
    </form>
    
  </div>
   <div v-if="mode==='cart'" class="fixed inset-0  backdrop-blur-xs bg-black/30 flex justify-center items-center z-50">
    <div class="bg-white text-center p-8 h-80 w-full rounded-lg shadow-md max-w-sm ">
<h1 class=" font-bold">Your Cart items-0</h1><br>

<a @click="mode=null" class="block text-center align-bottom mt-50 font-bold text-red-500 hover:text-red-700 cursor-pointer">Close</a>
    </div>
  </div>
   <div v-if="mode==='profile'" class="fixed inset-0  backdrop-blur-xs bg-black/30 flex justify-center items-center z-50">
    <div class="bg-white text-center p-8 h-60 w-full rounded-lg shadow-md max-w-sm ">
<h1 class=" font-bold">Profile</h1><br>
<span class=" text-sm"  v-if="userEmailvalue.length>0">{{ userEmailvalue }}</span><br><button class="px-3  mt-3 py-0.5 bg-[#d3d2d2] rounded-md hover:text-red-600"  @click="logout">Logout</button>
<a @click="mode=null" class="block text-center align-bottom mt-10 font-bold text-red-500 hover:text-red-700 cursor-pointer">Close</a>
    </div>
  </div>
    
    
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const slides = ref([
  "https://www.bechtle.com/dam/jcr:3664adb4-bc64-46a5-b0f8-1a48852e1150/cw04_mainbanner_samsung-eu.jpg",
  "https://invent.irujul.com/theme/default/img/npi/npi-20/po_iphone_2020.png",
  "https://cdn.shopify.com/s/files/1/0077/1807/6501/files/fORTUNER-BANNER_6.webp?v=1699007659",
  "https://static.vecteezy.com/system/resources/previews/020/737/706/non_2x/web-banner-or-horizontal-template-design-with-special-offer-on-mobile-phones-for-advertising-concept-vector.jpg"
]);

const index = ref(0);
let interval = null;

const next = () => {
  index.value = (index.value + 1) % slides.value.length;
};

const prev = () => {
  index.value = (index.value - 1 + slides.value.length) % slides.value.length;
};

onMounted(() => {
  interval = setInterval(next, 3000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});



// Method to toggle between login and signup forms
const mode=ref(null)
const UserEmail = ref("")
const UserPassword = ref("")

const name=ref("")
function saveData(){
const email = UserEmail.value.trim();
const password = UserPassword.value.trim();

if(!email || !password) {
    alert("Please fill all fields before submitting!");
    return; 
  }
    localStorage.setItem("UserEmail", UserEmail.value)
localStorage.setItem("UserPassword", UserPassword.value);
UserEmail.value=userEmailvalue.value
UserEmail.value=""
UserPassword.value=""
window.location.reload();
name.value=""
  }

const userEmailvalue = ref(localStorage.getItem("UserEmail") || "")
function logout(){
  localStorage.clear(UserEmail)
  window.location.reload();
}
</script>

