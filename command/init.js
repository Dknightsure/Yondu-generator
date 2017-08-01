const path = require("path")
const copy = require('./../tools/copy')

module.exports = function (name) {
  copy("../template/", name, () => {
      console.log('\ninitialize complete!\n')
  })
}