import Vue from 'vue'
import vueXcPlayer from './vue-xcplayer.vue'
 
const XcPlayer = {
  install(Vue, options) {
    Vue.component(vueXcPlayer.name, vueXcPlayer)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.XcPlayer = XcPlayer
  Vue.use(XcPlayer)
}
export default XcPlayer