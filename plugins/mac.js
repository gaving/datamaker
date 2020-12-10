const cache = require('../cache.js')
const pad = (n) => {
  if (n.length === 1) {
    return '0' + n
  }
  return n
}
const int = () => {
  return Math.floor(Math.random() * 255)
}
module.exports = () => {
  const mac = [int(), int(), int(), int(), int(), int()].map(x => pad(x.toString(16))).join('-')
  cache.set('mac', mac)
  return mac
}
