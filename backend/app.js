const Koa = require('koa')
const cors = require('koa-cors')
const app = new Koa()
const router = require('./router')
const bodyParser = require('koa-bodyparser')
// response

// app.use((res) => {
//   res.header('Access-Control-Allow-Origin', '*')
// })
app.use(bodyParser())
app.use(cors())

app.use(router.routes(), router.allowedMethods())

app.listen(9933)

console.log('app is stared & listening on port 9933')