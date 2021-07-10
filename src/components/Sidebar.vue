<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Sidebar',
  props: {
    currentPath: String,
  },
  setup() {
    const store = useStore()
    const isSidebarMinimize = computed(() => store.state.isSidebarMinimize)
    const isSidebarShow = computed(() => store.state.isSidebarShow)
    const isSidebarMobileShow = computed(() => store.state.isSidebarMobileShow)
    const toggleSidebar = () => store.commit('toggleSidebar')
    const sidebarWidth = computed(() => {
      if (!isSidebarShow.value) {
        return 'w-0'
      }
      if (!isSidebarMinimize.value) {
        return 'w-14'
      }
      return 'w-56'
    })

    return {
      isSidebarShow,
      isSidebarMinimize,
      isSidebarMobileShow,
      sidebarWidth,
      toggleSidebar,
    }
  },
}
</script>
<template>
  <div class="h-screen relative transition-all duration-500 hidden bg-[#3c4b64] md:block" :class="sidebarWidth">
    <div class="h-14 flex justify-center items-center bg-[#00001533]">
      <i-mdi:alpha-h-circle-outline class="flex text-white h-8 w-8"></i-mdi:alpha-h-circle-outline>
      <router-link v-if="isSidebarMinimize" to="/dashboard" class="flex ml-1 text-lg font-semibold tracking-widest font-mono text-white"
        >𝕳𝖆𝖑𝖎𝖉𝖊</router-link
      >
    </div>

    <div class="text-gray-200 text-sm">
      <ul>
        <li class="hover:bg-[#321fdb] transform transition duration-400 overflow-hidden hover:overflow-visible hover:w-56">
          <router-link
            to="/dashboard"
            class="flex h-12 w-56 px-4 items-center"
            :class="currentPath === '/dashboard' ? 'bg-[#ffffff] bg-opacity-5' : ''"
          >
            <i-clarity:dashboard-line class="h-5 w-5"></i-clarity:dashboard-line>
            <span class="ml-5 text-sm font-light tracking-wide">Dashboard</span>
          </router-link>
        </li>
        <li class="hover:bg-[#321fdb] transform transition duration-400 overflow-hidden hover:overflow-visible hover:w-56">
          <router-link
            to="/allChanges"
            class="flex h-12 w-56 px-4 items-center"
            :class="currentPath === '/allChanges' ? 'bg-[#ffffff] bg-opacity-5' : ''"
          >
            <i-ph:git-commit class="h-5 w-5"></i-ph:git-commit>
            <span class="ml-5 text-sm font-light tracking-wide">All Changes</span>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="absolute bottom-0 h-12 w-full bg-[#00001533] transform transition cursor-pointer hover:bg-gray-800" @click="toggleSidebar">
      <div class="relative h-full w-full flex items-center justify-center">
        <div class="absolute right-3">
          <i-mdi:chevron-left
            class="h-8 w-8 text-white opacity-60 transform transition"
            :class="isSidebarMinimize ? '' : ' rotate-180'"
          ></i-mdi:chevron-left>
        </div>
      </div>
    </div>
  </div>

  <div class="h-screen absolute z-20 transition-all duration-500 bg-[#3c4b64] md:hidden" :class="isSidebarMobileShow ? 'w-56' : 'w-0'">
    <div class="text-gray-200 text-sm">
      <ul>
        <li class="hover:bg-[#321fdb] transform transition duration-400 overflow-hidden hover:overflow-visible hover:w-56">
          <router-link
            to="/dashboard"
            class="flex h-14 w-56 px-4 items-center"
            :class="currentPath === '/dashboard' ? 'bg-[#ffffff] bg-opacity-5' : ''"
          >
            <i-clarity:dashboard-line class="h-5 w-5"></i-clarity:dashboard-line>
            <span class="ml-5 text-sm font-light tracking-wide">Dashboard</span>
          </router-link>
        </li>

        <li class="hover:bg-[#321fdb] transform transition duration-400 overflow-hidden hover:overflow-visible hover:w-56">
          <router-link
            to="/allChanges"
            class="flex h-14 w-56 px-4 items-center"
            :class="currentPath === '/allChanges' ? 'bg-[#ffffff] bg-opacity-5' : ''"
          >
            <i-ph:git-commit class="h-5 w-5"></i-ph:git-commit>
            <span class="ml-5 text-sm font-light tracking-wide">All Changes</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
