<template>
  <div class="registered">
    <el-form class="form" label-width="60px" :label-position="'left'" ref="registered" :model="user" :rules="rules">
      <h1 class="form-title">
        用户登录
      </h1>
      <el-form-item label="账号" prop="account">
        <el-input v-model="user.account" @keyup.enter.native="submitForm('registered')"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" @keyup.enter.native="submitForm('registered')"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="name">
        <el-input v-model="user.name" @keyup.enter.native="submitForm('registered')"></el-input>
      </el-form-item>
      <el-form-item label="头像" prop="avatar">
        <el-input v-model="user.avatar" @keyup.enter.native="submitForm('registered')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('registered')">
          提交
        </el-button>
        <el-button @click="resetForm('registered')">
          重置
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
  data() {
    return {
      user: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, trigger: 'blur', message: '请输入账号' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '请输入密码' }
        ]
      }
    }
  },
  methods: {
    async submitForm(formName) {
      await this.$refs[formName].validate((valid) => {
        if (valid) {
          api.registered(this.user).then(res => {
            if (res.code == 200) {
              // this.$store.commit('SET_TOKEN', res.data.token)
              // this.Toast(res.message)
              // this.$router.push('/')
            } else {
              this.Toast(res.message, 'error')
            }
          })
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    Toast(message, type = 'success') {
      Message({ message: message, type: type, duration: 1000 })
    }
  }
}
</script>

<style lang="less" scoped>
.registered {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.form {
	width: 380px;
	border: 1px solid #eeeeee;
	padding: 20px;
	.form-title {
		text-align: center;
	}
}
</style>
