<template>
  <section class="container">
    <header>Tencent</header>
    <div class="table">
      <ZwTable>
        <thead class="thead">
          <tr>
            <th>Time</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr v-for="(item, index) in list" :key="index">
            <td>{{item.date}}</td>
            <td>{{item.price}}</td>
            <td>{{index === 0 ? 1 : (item.price/list[0].price).toFixed(2)}}</td>
          </tr>
        </tbody>
      </ZwTable>
    </div>
  </section>
</template>

<script>
import ZwTable from '~/components/Table.vue'
import axios from 'axios'

export default {
  components: {
    ZwTable
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    async asyncData () {
      let {data} = await axios.get(`http://localhost:9933/getList`, {params: {name: 'Tencent'}})
      this.list = data.list
    }
  },
  created() {
    this.asyncData()
  }
}
</script>


<style lang="less">
  header {
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 36px;
    text-align: center;
    font-weight: bold;
    background-color: #ccc;
  }
  .table {
    margin-top: 20px;
    padding: 0 50px;
    .thead th{
      padding: 10px 0;
      font-size: 32px;
      font-weight: bold;
    }
    .tbody td{
      padding: 10px 0;
    }
  }
</style>
