class StockController {
  static async getStock (ctx) {
    ctx.body = 'here is your stocks'
  }
}

module.exports = StockController