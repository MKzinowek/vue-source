import { createRouter, createWebHistory } from 'vue-router'
import Items from '../views/Items.vue'
import Home from '../views/HomePage.vue'
import Rhino from '../views/AnimalPages/Rhino.vue'
import Zebra from '../views/AnimalPages/Zebra.vue'
import Panda from '../views/AnimalPages/Panda.vue'
import PolarBear from '../views/AnimalPages/PolarBear.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Items',
      name: 'Items',
      component: Items

    }, 
    {
      path: '/projects/app12/src/views/AnimalPages/Zebra.vue',
      name: 'zebra',
      component: Zebra
    },
    {
      path: '/projects/app12/src/views/AnimalPages/Rhino.vue',
      name: 'rhino',
      component: Rhino
    },
    {
      path: '/projects/app12/src/views/AnimalPages/PolarBear.vue',
      name: 'polar bear',
      component: PolarBear
    },
    {
      path: '/projects/app12/src/views/AnimalPages/Panda.vue',
      name: 'panda',
      component: Panda
    }
   ]
})

export default router
