import Vue from 'vue'
import router from '@/router/index'
import App from './App.vue'

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')


// * Simple example of vue instance getters and setters 'proxying'

function MYVue(params) {

  this.$el = document.querySelector(params.el)
  this.$data = params.data

  for (let atr in this.$data) {
    Object.defineProperty(this, atr, {
      get: () => {
        return this.$data[atr]
      },
      set: value => {
        this.$data[atr] = value
      }
    })
  }

  // * Regex to get some expressions mentioned in our MYVue element "#myvue"
  // * Ex. {{ 2 * 10 }}, {{ name }}

  // const regex = /\{\{([\s\w+*-]*)\}\}/g

  // this.$el.innerHTML = this.$el.innerHTML.replace(regex, (match, $1) => {
  //   const value = this[$1.trim()]

  //   return value ? value : eval($1)
  // })
}

const myvm = new MYVue({
  el: '#myvue',
  data: {
    name: 'Foo',
    lastname: 'Doe'
  }
})

console.log(`name: ${myvm.name}`)
console.log(`lastname: ${myvm.lastname}`)
