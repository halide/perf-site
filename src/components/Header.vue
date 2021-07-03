<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const hideSidebar = () => store.commit('hideSidebar')
    const hideMobileSidebar = () => store.commit('hideMobileSidebar')
    return {
      hideSidebar,
      hideMobileSidebar,
    }
  },
}
</script>

<template>
  <header class="sticky h-14 px-5 py-2 top-0 z-10 bg-white shadow-lg flex items-center justify-between lg:px-8">
    <div class="flex w-12">
      <button class="focus:outline-none hidden md:block" @click="hideSidebar">
        <i-cil:menu class="h-6 w-6 opacity-40 hover:opacity-100 transition"></i-cil:menu>
      </button>
      <button class="focus:outline-none md:hidden" @click="hideMobileSidebar">
        <i-cil:menu class="h-6 w-6 opacity-40 hover:opacity-100 transition"></i-cil:menu>
      </button>
      <ul class="ml-10 hidden md:block">
        <li class="opacity-40 hover:opacity-70 transition">
          <router-link to="/dashboard" class="text-sm">Dashboard</router-link>
        </li>
      </ul>
    </div>

    <div class="md:hidden">
      <img src="../assets/logo.png" alt="Halide" class="w-32" />
    </div>
    <div class="w-12">
      <a href="https://github.com/halide/perf-site" target="_blank"
        ><i-mdi:github class="h-6 w-6 opacity-40 hover:opacity-100 transition"></i-mdi:github
      ></a>
    </div>
  </header>
</template>
