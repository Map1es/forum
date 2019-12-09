<template>
  <div class="login">
    <el-form class="form" label-width="60px" :label-position="'left'" ref="login" :model="user" :rules="rules">
      <h1 class="form-title">
        用户登录
      </h1>
      <el-form-item label="账号" prop="account">
        <el-input v-model="user.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('login')">
          提交
        </el-button>
        <el-button @click="resetForm('login')">
          重置
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
          api.login(this.user).then(res => {
            if (res.code == 200) {
              this.$store.commit('SET_TOKEN', res.data.token)
              this.$router.push('/')
            }
          })
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less">
.login{
  height: 100%;
	width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form{
  width: 380px;
  border: 1px solid #eeeeee;
  padding: 20px;
  .form-title{
    text-align: center;
  }
}
</style>
