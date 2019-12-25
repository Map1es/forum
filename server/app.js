const Koa = require('koa')
const cors = require('koa2-cors')

const bodyParser = require('koa-bodyparser')
const controller = require('./controller')
const mongoose = require('mongoose')
const app = new Koa()
// 连接数据库
mongoose.connect('mongodb://203.195.212.107:27017/forum')
let db = mongoose.connection
db.on('open', function(err) {
  if (err) {
    console.log('数据库连接失败')
    throw err
  }
  console.log('数据库连接成功')
})


app.use(cors())
// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})

// parse request body:
app.use(bodyParser())

// add controllers:
app.use(controller())

app.listen(3000)
console.log('app started at port 3000...')

