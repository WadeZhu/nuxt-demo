const router = require('koa-router')()
const StockController = require('./controller/StockController')

router.get('/getList', StockController.getStock)

module.exports = router