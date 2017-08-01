const Router = require('koa-router')

let comments = new Router()

comments.get('/', async (ctx) => {
  ctx.body = '<h1>Comments Page</h1>'
})

comments.get('/add-comments', async (ctx) => {
  ctx.body = '<h1>Add Comments</h1>'
})

module.exports = comments