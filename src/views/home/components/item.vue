<template>
  <el-card shadow="hover" class="item">
    <div class="fxc-between content">
      <el-avatar shape="circle" :size="38" :fit="'contain'" :src="url"></el-avatar>
      <div class="mid">
        <span class="title">文章标题</span>
        <div class="artitle">
          <span class="author">作者</span>
          <span>{{ new Date().toString() }}</span>
        </div>
      </div>
      <div class="flex fx-around button-groud">
        <div class="button">
          <i class="iconfont iconzan2"></i>{{ 123 }}
          <!-- <i class="iconfont iconzan1"></i>{{ 123 }} -->
        </div>
        <div class="button">
          <i class="iconfont iconpinglun"></i>{{ 123 }}
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      url:
				'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  }
}
</script>

<style lang="less" scoped>
.content {
	.mid {
		flex: 1;
		margin-left: 20px;
		cursor: pointer;
		.title {
			font-size: 22px;
			color: @color-3;
		}
		.artitle {
			margin-top: 8px;
			span {
				color: @color-9;
				font-size: 14px;
			}
			span.author {
				color: @color-6;
				margin-right: 15px;
			}
		}
	}
	.button-groud {
		border-radius: 5px;
		.button {
			font-size: 14px;
			padding: 10px 20px;
			cursor: pointer;
			i {
				margin-right: 5px;
			}
			& {
				border: 1px solid #ebeef5;
			}
			&:hover {
				border-color: @color-primary;
        color: @color-primary;
        opacity: 0.5;
			}
		}
	}
}
</style>
