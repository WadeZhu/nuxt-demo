
const ModelBuilder = require('./ModelBuilder.js')

module.exports = ModelBuilder.build({
  name: 'stock',
  attributes: {
    name: {type: String},
    list: {type: Object, required: true}
  },

  statics: {
    /**
     * 取某个股票
     */
    async getStock (stockId) {
      let stock = await this.findById(stockId)
      if (!stock) {
        console.log(`找不到该股票${stockId}`)
        throw new Error('找不到该股票')
      }
      return stock
    }
  }
})
