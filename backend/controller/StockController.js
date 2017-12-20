const {Stock} = require('../model/')

class StockController {
  static async getStock (ctx) {
    const {name} = ctx.request.query
    const list = await Stock.findOne({name})
    ctx.body = list
  }
  static async updateStock (ctx) {
    const {name, date, price} = ctx.request.body
    console.log(ctx.request.body)
    await Stock.update({name}, {$push: {list: {date, price}}})
    ctx.body = {
      code: 0,
      message: 'success'
    }
  }
}

module.exports = StockController