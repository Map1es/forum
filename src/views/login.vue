<template>
  <div class="login">
    <el-form class="form" label-width="80px" :label-position="'left'" ref="login" :model="user" :rules="rules">
      <h1 class="form-title">
        用户登录
      </h1>
      <el-form-item label="账号" prop="user_id">
        <el-input v-model="user.user_id" @keyup.enter.native="submitForm('login')"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="user_pwd">
        <el-input v-model="user.user_pwd" @keyup.enter.native="submitForm('login')" show-password></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="flex">
          <el-input v-model="user.code" @keyup.enter.native="submitForm('login')"></el-input>
          <img class="code" :src="img_base64" alt="code" title="点击切换验证码" @click="getCode">
        </div>
      </el-form-item>
      <el-form-item class="button">
        <el-button type="primary" @click="submitForm('login')">
          登录
        </el-button>
        <el-button @click="resetForm('login')">
          重置
        </el-button>
      </el-form-item>
      <el-link :underline="false" @click="$router.push('/registered')">
        没有账号，去注册
      </el-link>
    </el-form>
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
  data() {
    return {
      user: {
        user_id: '',
        user_pwd: '',
        code: '',
        code_token: ''
      },
      img_base64: '',
      rules: {
        user_id: [
          { required: true, trigger: 'blur', message: '请输入账号' }
        ],
        user_pwd: [
          { required: true, trigger: 'blur', message: '请输入密码' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 4, message: '请输入4位有效验证码', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getCode()
  },
  methods: {
    async getCode() {
      let res = await api.getCode()
      let { code, data = {} } = res
      if (code === 200) {
        this.img_base64 = data.img
        this.user.code_token = data.token
      }
    },
    async submitForm(formName) {
      await this.$refs[formName].validate((valid) => {
        if (valid) {
          api.login(this.user).then(res => {
            if (res.code == 200) {
              this.$store.commit('SET_TOKEN', res.data.token)
              this.$store.commit('SET_USER', { id: res.data._id, name: res.data.user_name, avatar: res.data.avatar })
              this.Toast(res.message)
              this.$router.push('/')
            } else {
              this.Toast(res.msg, 'error')
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
.login {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.form {
	width: 500px;
	border: 1px solid #eeeeee;
	padding: 20px;
	.form-title {
		text-align: center;
  }
  text-align: center;
}
.code {
  width: 100px;
  cursor: pointer;
  margin-left: 20px;
}
.button{
  text-align: start;
}
</style>
