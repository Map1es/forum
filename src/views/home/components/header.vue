<template>
  <div class="Header">
    <i class="el-icon-plus item"></i>
    <el-badge is-dot class="item">
      <i class="el-icon-message-solid"></i>
    </el-badge>
    <el-dropdown @command="handleCommand">
      <i class="el-icon-user-solid item"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>修改信息</el-dropdown-item>
        <el-dropdown-item command="logOut">
          登出
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    handleCommand(command) {
      this[command]()
    },
    logOut() {
      this.$router.replace({ name: 'login' })
    }
  }
}
</script>

<style lang="less" scoped>
.Header {
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	.item {
		margin-right: 20px;
		font-size: 24px;
	}
	.item:hover {
		color: @color-primary;
	}
}
</style>
