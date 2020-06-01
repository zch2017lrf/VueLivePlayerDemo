import Vue from 'vue'
import App from './App'
import router from './router'
import VideoPlayer from 'vue-video-player'
import 'videojs-contrib-hls'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.config.productionTip = false
// VideoPlayer.config({
//   youtube: true,
//   switcher: true,
//   hls: true
// })
Vue.use(VideoPlayer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


