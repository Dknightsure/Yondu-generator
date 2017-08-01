const router = require('koa-router')()

const home = require('./home')
const user = require('./user')
const comments = require('./comments')

router.use('/', home.routes(), home.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())
router.use('/comments', comments.routes(), user.allowedMethods())

module.exports = router