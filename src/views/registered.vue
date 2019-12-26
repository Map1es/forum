<template>
  <div class="registered">
    <el-form class="form" label-width="100px" :label-position="'left'" ref="registerForm" :model="registerForm" :rules="registerRules">
      <h1 class="form-title">
        用户注册
      </h1>
      <el-form-item label="昵称" prop="user_name">
        <el-input v-model="registerForm.user_name" maxlength="10"></el-input>
      </el-form-item>
      <el-form-item label="账号" prop="user_id">
        <el-input v-model="registerForm.user_id"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="user_pwd">
        <el-input v-model="registerForm.user_pwd" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="re_user_pwd">
        <el-input v-model="registerForm.re_user_pwd" show-password></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="flex">
          <el-input v-model="registerForm.code" class="code_input"></el-input>
          <img class="code" :src="img_base64" alt="code" title="点击切换验证码" @click="getCode">
        </div>
      </el-form-item>
      <el-form-item class="button">
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
    const validatePwd = (rule, value, callback) => {
      let reg = /^[\w_-]{6,10}$/
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (!reg.test(value)) {
        callback(new Error('密码长度应为6-10位、支持字母、数字、下划线、减号'))
      } else {
        if (this.registerForm.re_user_pwd !== '') {
          this.$refs.registerForm.validateField('re_user_pwd')
        }
        callback()
      }
    }
    const validateRepwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.user_pwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    const validateUserId = (rule, value, callback) => {
      let reg = /^[a-zA-Z0-9_-]{6,10}$/
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else if (!reg.test(value)) {
        callback(new Error('用户名长度应为6-10位、支持字母、数字、下划线、减号'))
      } else {
        callback()
      }
    }
    return {
      img_base64: '',
      registerForm: {
        user_name: '',
        user_id: '',
        user_pwd: '',
        re_user_pwd: '',
        code: '',
        code_token: '',
        avatar: ''
      },
      imageUrl: '',
      registerStatus: false,
      cropper_box_mark: false,
      cropperData: {
        img: '',
        autoCrop: true,
        autoCropWidth: 400,
        autoCropHeight: 400,
        fixedBox: true
      },
      registerRules: {
        user_name: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        user_id: [
          { required: true, validator: validateUserId, trigger: 'blur' }
        ],
        user_pwd: [
          { required: true, validator: validatePwd, trigger: 'blur' }
        ],
        re_user_pwd: [
          { required: true, validator: validateRepwd, trigger: 'blur' }
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
        this.registerForm.code_token = data.token
      }
    },
    async submitForm() {
      if (this.registerStatus) {
        return false
      }
      this.registerStatus = true
      let _self = this
      let res = await api.registered(this.registerForm)
      let { code, msg, data = {} } = res
      if (code === 200) {
        // 注册成功，将信息保存起来
        this.$store.commit('SET_TOKEN', data.token)
        this.$store.commit('SET_USER', { id: data._id, name: data.user_name, avatar: data.avatar })
        this.$router.push('/index')
      } else {
        this.$message({
          message: msg,
          type: 'error',
          onClose() {
            _self.getCode()
            _self.registerStatus = false
            _self.registerForm.code = ''
          }
        })
      }
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
