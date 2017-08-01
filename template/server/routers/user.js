const Router = require('koa-router')

let user = new Router()

user.get('/', async (ctx) => {
  ctx.body = '<h1>User Page</h1>'
})

user.get('/add-friends', async (ctx) => {
  ctx.body = '<h1>User Add Friends</h1>'
})

module.exports = user