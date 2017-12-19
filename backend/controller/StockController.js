const {Stock} = require('../model/')

class StockController {
  static async getStock (ctx) {
    const {name} = ctx.request.query
    const list = await Stock.findOne({name})
    ctx.body = list
  }
  static async updateStock (ctx) {
    const {name, date, price} = ctx.request.query
    await Stock.update({name}, {$push: {list: {date, price}}})
  }
}

module.exports = StockController