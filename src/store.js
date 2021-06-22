import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      isSidebarMinimize: false,
      isSidebarShow: true,
      isSidebarMobileShow: false,
    }
  },
  mutations: {
    toggleSidebar(state) {
      state.isSidebarMinimize = !state.isSidebarMinimize
    },
    hideSidebar(state) {
      state.isSidebarShow = !state.isSidebarShow
      console.log(state.isSidebarShow)
    },
    hideMobileSidebar(state) {
      state.isSidebarMobileShow = !state.isSidebarMobileShow
      console.log(state.isSidebarMobileShow)
    },
  },
})

export default store
