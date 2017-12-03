const {Stock} = require('../model/')

class StockController {
  static async getStock (ctx) {
    const {name} = ctx.request.query
    const list = await Stock.findOne({name})
    ctx.body = list
  }
}

module.exports = StockController