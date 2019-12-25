let User = require('../models/user')

let registered = async (ctx) => {
  let user = new User({ ...ctx.request.body })
  // let user = new User({ name: 'ywj',
  //   password: '123456',
  //   account: '222',
  //   artitleNumber: 0,
  //   awesome: 0,
  //   avatar: '123' })
  ctx.status = 200
  await User.findOne({ 'account': `${ctx.request.body.account}` }).then((res) => {
    if (res) {
      ctx.body = { code: 304, message: '该账号已存在' }
    } else {
      insert()
    }
  })
  async function insert() {
    await user.save(function (err, res) {
      if (err) {
        console.log('Error:' + err)
      } else {
        console.log('Res:' + res)
      }
    })
  }
}

module.exports = {
  'POST /registered': registered
}
