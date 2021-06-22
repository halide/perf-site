<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const isSidebarMobileShow = computed(() => store.state.isSidebarMobileShow)
    const hideMobileSidebar = () => store.commit('hideMobileSidebar')
    return {
      isSidebarMobileShow,
      hideMobileSidebar,
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
    <Sidebar></Sidebar>
    <div class="w-screen h-screen overflow-scroll">
      <Header></Header>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
