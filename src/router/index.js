import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import player from '@/components/player'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/player',
      name: 'player',
      component: player
    },
    {
      path: '/hi1',
      name: 'hi1',
      component: Hi1
    },{
      path:'/hi',
      component:Hi,
      children:[
        {path:'/',component:Hi},
        {path:'hi1',component:Hi1}
      ]
    }
  ]
})
