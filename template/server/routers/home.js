const Router = require('koa-router')

let home = new Router()

home.get('/', async (ctx) => {
  ctx.body = '<h1>Hello, Yondu</h1>'
})

module.exports = home