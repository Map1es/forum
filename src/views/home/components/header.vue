<template>
  <div class="Header">
    <i class="el-icon-plus item"></i>
    <el-badge is-dot class="item">
      <i class="el-icon-message-solid"></i>
    </el-badge>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.Header{
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .item{
    margin-right: 20px;
    font-size: 24px;
  }
  .item:hover{
    color: @color-primary;
  }
}
</style>
