const fs = require('fs')

function addMapping(router, mapping) {
  for (let url in mapping) {
    if (url.startsWith('GET ')) {
      let path = url.substring(4)
      router.get(path, mapping[url])
      console.log(`register URL mapping: GET ${path}`)
    } else if (url.startsWith('POST ')) {
      let path = url.substring(5)
      router.post(path, mapping[url])
      console.log(`register URL mapping: POST ${path}`)
    } else {
      console.log(`invalid URL: ${url}`)
    }
  }
}

function addControllers(router) {
  let files = fs.readdirSync(__dirname + '/controllers')
  let jsFiles = files.filter((f) => {
    return f.endsWith('.js')
  })

  for (let f of jsFiles) {
    console.log(`process controller: ${f}...`)
    let mapping = require(__dirname + '/controllers/' + f)
    addMapping(router, mapping)
  }
}

module.exports = function (dir) {
  let controllersDir = dir || 'controllers' // 如果不传参数，扫描目录默认为'controllers'
  let router = require('koa-router')()
  addControllers(router, controllersDir)
  return router.routes()
}