<template>
  <el-container class="home">
    <el-aside class="aside" width="250px">
      <LeftMenu></LeftMenu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-main class="main">
        <Item></Item>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LeftMenu from './components/leftMenu'
import Header from './components/header'
import Item from './components/item'
export default {
  components: { LeftMenu, Header, Item }
}
</script>

<style lang="less">
.home{
  width: 100%;
  height: 100%;
}
.aside{
  // width: 200px;
  // height: 100%;
  border-right: 1px solid #f1f1f1;
}
.header{
  border-bottom: 1px solid #f1f1f1;
}
</style>
