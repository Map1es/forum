let mongoose = require('mongoose')
mongoose.connect('mongodb://203.195.212.107:27017/forum')
let db = mongoose.connection
db.on('open', function(err) {
  if (err) {
    console.log('数据库连接失败')
    throw err
  }
  console.log('数据库连接成功')
})

let usersSchema = mongoose.Schema({
  name: String,
  password: String,
  account: String,
  artitleNumber: Number,
  awesome: Number,
  avatar: String
})

let user = mongoose.model('user', usersSchema)

let login = async (ctx) => {
  let account = ctx.request.body.account || ''
  let password = ctx.request.body.password || ''
  console.log(`signin with name: ${account}, password: ${password}`)
  ctx.status = 200
  await user.findOne({ 'account': `${account}` }).then((res) => {
    if (res) {
      if (password == res.password) {
        ctx.body = { code: 200, data: { token: new Date().getTime() }, message: '登录成功' }
      } else {
        ctx.body = { code: 304, message: '密码错误' }
      }
    } else {
      ctx.body = { code: 304, message: '该账户没有注册' }
    }
  })
}

module.exports = {
  'POST /login': login
}
