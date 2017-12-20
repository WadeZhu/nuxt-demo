const router = require('koa-router')()
const StockController = require('./controller/StockController')

router.get('/stock/getList', StockController.getStock)
router.post('/stock/updateList', StockController.updateStock)

module.exports = router