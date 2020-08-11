<template>
  <div id="app">
    <lwq-button>默认按钮</lwq-button>
    <lwq-button type="primary">主要按钮</lwq-button>
    <lwq-button type="success">成功按钮</lwq-button>
    <lwq-button type="waring">警告按钮</lwq-button>
    <lwq-button type="danger">危险按钮</lwq-button>
    <lwq-button type="info">信息按钮</lwq-button>
    <lwq-icon icon="bianji"></lwq-icon>
    <lwq-icon icon="soucang"></lwq-icon>
    <lwq-button type="danger" icon="search-line" icon-position="left">搜索</lwq-button>
    <lwq-button type="danger" icon="search-line" icon-position="right">搜索</lwq-button>
    <lwq-button type="success" loading>搜索</lwq-button>
    <lwq-button type="success" @click="fn">触发事件</lwq-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    fn(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">

</style>
