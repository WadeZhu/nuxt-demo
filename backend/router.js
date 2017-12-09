const router = require('koa-router')()
const StockController = require('./controller/StockController')

router.get('/stock/getList', StockController.getStock)

module.exports = router