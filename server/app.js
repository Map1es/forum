// const Koa = require('koa')
// const cors = require('koa2-cors')

// const bodyParser = require('koa-bodyparser')
// const controller = require('./controller')
// const router = require('koa-router')()
// const app = new Koa()
// app.use(cors())
// // // log request URL:
// // app.use(async (ctx, next) => {
// //   console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
// //   await next()
// // })

// // // parse request body:
// app.use(bodyParser())

// // // add controllers:
// // app.use(controller())
// router.post('/login', async (ctx) => {

//   console.log(ctx.request.body)
//   ctx.body = ctx.request.body // 获取表单提交的数据
// })

// app.listen(3000)
// console.log('app started at port 3000...')
let Koa = require('koa')
let bodyParser = require('koa-bodyparser') // 引入模块
let app = new Koa()
const router = require('koa-router')()
app.use(bodyParser()) // 将模块作为koa的中间件引入

router.post('/login', async (ctx) => {

  console.log(ctx.request.body)
  ctx.body = ctx.request.body // 获取表单提交的数据
})

app.listen(3000)
