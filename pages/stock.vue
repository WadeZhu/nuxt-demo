<template>
  <section class="container">
    <mt-header :title="name">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <span slot="right" @click="add()">添加</span>
    </mt-header>
    <header>{{name}}</header>
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
import '~/plugins/mint-ui'
import { MessageBox } from 'mint-ui'

export default {
  components: {
    ZwTable
  },
  data() {
    return {
      name: '--*--',
      list: []
    }
  },
  methods: {
    async asyncData() {
      let {data} = await axios.get(`http://localhost:9933/stock/getList`, {params: {name: 'Tencent'}})
      this.list = data.list
      this.name = data.name
    },
    async updateData(value) {
      await axios.post('http://localhost:9933/stock/updateList', {params: {
        name: 'Tencent',
        date: new Date(),
        price: value
      }})
    },
    add() {
      MessageBox.prompt('请输入当前股价').then(({ value, action }) => {
        console.log(value)
        this.updateData(value)
      })
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
