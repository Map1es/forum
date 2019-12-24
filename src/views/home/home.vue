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
        <div class="flex-dc list-item">
          <Item v-for="item in list" :key="item" class="item"></Item>
        </div>
        <el-pagination background layout="prev, pager, next" :total="1000" class="page">
        </el-pagination>
      </el-main>
      <el-footer class="footer" height="60px">
        author: ywj
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import LeftMenu from './components/leftMenu'
import Header from './components/header'
import Item from './components/item'
export default {
  components: { LeftMenu, Header, Item },
  data() {
    return {
      list: [2]
    }
  }
}
</script>

<style lang="less">
.home {
	width: 100%;
	height: 100%;
}
.aside {
	// width: 200px;
	// height: 100%;
	border-right: 1px solid #f1f1f1;
}
.header {
	border-bottom: 1px solid #f1f1f1;
}
.main {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.list-item {
		// margin-bottom: 30px;
		height: 700px;
		.item {
			margin-bottom: 20px;
		}
	}
	.page {
		flex: 1;
		float: right;
		margin-top: 30px;
	}
}
.footer {
	text-align: center;
	line-height: 60px;
}
</style>
