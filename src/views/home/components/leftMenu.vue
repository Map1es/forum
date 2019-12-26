<template>
  <div class="leftMenu">
    <div class="user fxc-between flex-dc">
      <el-avatar shape="circle" :size="100" :fit="'contain'" :src="url"></el-avatar>
      <span class="name">{{ user.name }}</span>
    </div>
    <div class="contant fx-around flex-dc">
      <div class="item fxc-between">
        <span>文章</span>
        <span class="number">13</span>
      </div>
      <div class="item fxc-between">
        <span>赞</span>
        <span class="number">13</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser
    }
  }
}
</script>

<style lang="less" scoped>
.leftMenu {
	width: 100%;
	.user {
		margin: 40px 0;
		height: 150px;
		width: 100%;
		.name {
			font-size: 24px;
		}
	}
	.contant {
		margin-top: 40px;
		// height: 150px;
		width: 100%;
    .item{
      padding: 0 35px;
      font-size: 16px;
      color: @color-primary;
      font-weight: 300;
      margin-bottom: 15px;
      .number{
        background-color: #eee;
        border-radius: 5px;
        padding: 5px;
        color: @color-3;
      }
    }
	}
}
</style>
