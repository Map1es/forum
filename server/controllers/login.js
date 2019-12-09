let login = async (ctx) => {
  let
    name = ctx.request.body.name || ''
  let password = ctx.request.body.password || ''
  console.log(`signin with name: ${name}, password: ${password}`)
  if (name === 'koa' && password === '12345') {
    ctx.status = 200
    ctx.message = '登录成功'
  } else {
    ctx.status = 403
    ctx.message = '登录失败'
  }
}

module.exports = {
  'login': login
}
