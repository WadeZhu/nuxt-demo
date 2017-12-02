const Koa = require('koa')
const app = new Koa()
const router = require('./router')
// response
app.use(router.routes(), router.allowedMethods())

app.listen(9933)

console.log('app is stared & listening on port 9933')