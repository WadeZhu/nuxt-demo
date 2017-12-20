const router = require('koa-router')()
const StockController = require('./controller/StockController')

router.get('/stock/getList', StockController.getStock)
router.get('/stock/updateList', StockController.updateStock)

module.exports = router