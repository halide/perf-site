<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Dashboard',
  setup() {
    const store = useStore()
    const isSidebarMobileShow = computed(() => store.state.isSidebarMobileShow)
    const hideMobileSidebar = () => store.commit('hideMobileSidebar')

    const router = useRouter()
    const currentPath = router.currentRoute
    console.log(currentPath)
    return {
      isSidebarMobileShow,
      hideMobileSidebar,
      currentPath,
    }
  },
}
</script>

<template>
  <div class="flex">
    <div
      :class="isSidebarMobileShow ? 'w-screen h-screen fixed bg-gray-900 z-20 opacity-30 md:hidden' : 'hidden'"
      @click="hideMobileSidebar"
    ></div>
    <Sidebar :current-path="currentPath.fullPath"></Sidebar>
    <div class="w-screen h-screen overflow-scroll">
      <Header :current-path="currentPath.fullPath"></Header>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
