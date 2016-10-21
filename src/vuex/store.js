import Vue from 'vue'
import Vuex from 'vuex'
// import home from './modules/home'
// import findCar from './modules/findCar'
// import freeCar from './modules/freeCar'
// import specialCar from './modules/specialCar'
// import lifeCar from './modules/lifeCar'
// import login from './modules/login'
// import search from './modules/search'
// import other from './modules/other'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug
})
