<template>
  <div class="container">
    <div class="text-center flex justify-center items-center">
      <div class="mx-auto w-4/6">
        <Logo />
        <h1 class="text-3xl text-teal-600 leading-5 mt-4">nuxtauth</h1>
        <h2 class="text-xl text-gray-600">simple authentication with nuxt</h2>
      </div>

      <div class="w-4/6 border-0 border-teal-700 py-20 px-12 rounded-lg">
        <div class="relative">
          <fa-icon
            icon="user"
            class="text-3xl text-teal-600 absolute mt-8 ml-1 inset-y-0 left-0 flex items-center pl-2"
          />
          <label for="username" class="text-teal-600 text-xl font-semibold"
            >Username</label
          >
          <input
            id="username"
            class="border border-gray-700 text-gray-700 py-1 w-full text-md pl-10 pr-4 rounded mb-4"
            type="text"
            value=""
            maxlength="64"
          />
        </div>

        <div class="relative">
          <fa-icon
            icon="key"
            class="text-3xl text-teal-600 absolute mt-8 ml-1 inset-y-0 left-0 flex items-center pl-2"
          />
          <label for="password" class="text-teal-600 text-xl font-semibold"
            >Password</label
          >
          <input
            id="password"
            class="border border-gray-700 text-gray-700 py-1 w-full text-md pl-10 pr-4 rounded mb-4"
            type="password"
            value=""
            maxlength="512"
          />
        </div>

        <button
          class="border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white transition duration-300 font-semibold rounded-lg py-1 px-8"
        >
          Log In
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
