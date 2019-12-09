let login = async (ctx) => {
  let account = ctx.request.body.account || ''
  let password = ctx.request.body.password || ''
  console.log(`signin with name: ${account}, password: ${password}`)
  ctx.status = 200
  if (account === '123' && password === '12345') {
    ctx.body = { code: 200, data: { token: new Date().getTime() }, message: '登录成功' }
  } else {
    ctx.body = { code: 304, message: '登录失败' }
  }
}

module.exports = {
  'POST /login': login
}
