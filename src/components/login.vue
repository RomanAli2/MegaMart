<template>
  <div v-if="showpage" class="login flex-1 justify-center items-center min-h-screen bg-gray-50">
    <form class="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
      <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">Welcome back to Megamart</h1>
      
      <label for="email" class="block text-gray-700">Email</label>
      <input type="email" placeholder="Enter Email" class="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400">
      
      <label for="Password" class="block text-gray-700">Password</label>
      <input type="password" placeholder="Enter Password" class="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-sky-400">
      
      <button type="submit" class="w-full bg-sky-500 text-white py-3 rounded-md text-lg hover:bg-sky-600 transition duration-300">Login</button>
      
      <p class="text-center text-gray-600 mt-4">Don't have an account? <a href=".signup" class="text-sky-500 hover:text-sky-700">Sign Up</a></p>
    </form>
  </div>
  <div v-if="signuppage" class="signup flex-1 justify-center items-center min-h-screen bg-gray-50">
    <form class="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
      <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">Create Your Account</h1>
      
      <label for="name" class="block text-gray-700">Full Name</label>
      <input type="text" placeholder="Enter Full Name" class="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400">
      
      <label for="email" class="block text-gray-700">Email</label>
      <input type="email" placeholder="Enter Email" class="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400">
      
      <label for="password" class="block text-gray-700">Password</label>
      <input type="password" placeholder="Enter Password" class="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-sky-400">
      
      <button type="submit" class="w-full bg-sky-500 text-white py-3 rounded-md text-lg hover:bg-sky-600 transition duration-300">Sign Up</button>
      
      <p class="text-center text-gray-600 mt-4">Already have an accountt <a href=".login" class="text-sky-500 hover:text-sky-700">Login</a></p>
    </form>
  </div>
</template>
<script setup>

</script>
