<template>
  <table class="table" :class="{'table-bordered': fullBordered, 'table-no-cell-bordered': !cellBordered, 'table-no-content-bordered': !contentBordered}">
    <slot></slot>
  </table>
</template>

<script>
export default {
  name: 'x-table',
  props: {
    fullBordered: Boolean,
    cellBordered: {
      type: Boolean,
      default: true
    },
    contentBordered: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less">

.table {
  position: relative;
  width: 100%;
  border-collapse: collapse;
  line-height: 1.7;
}

.table th {
  font-weight: normal;
  text-align: center;
  color: black;
  border-bottom: 1px solid black; /* no */
}

.table td {
  line-height: 2.4;
  border-bottom: 1px dashed #333; /* no */
  text-align: center;
}

.table tbody {
  margin-top: 20px;
}

.table tr td,
.table tr th {
  text-align: left;
}

.table tr td:last-child,
.table tr th:last-child {
  text-align: right;
}
</style>
