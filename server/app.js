const fs = require('fs')
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

let urls = fs.readdirSync(__dirname + '/routes')
urls.forEach(element => {
  let module = require(__dirname + '/routes/' + element)
  router.use('/' + element.replace('.js', ''), module.routes())
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
