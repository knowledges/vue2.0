export default [{
  path: '/',
  name: 'home',
  component: require('./views/home/home')
}, {
  path: '*',
  component: require('./views/home/home')
}, {
  path: '*',
  component: require('./views/home1/home1')
}]

