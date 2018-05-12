var $ = require('jquery')

var server = vertx.createHttpServer().requestHandler(function(req) {
  req.response().end('working')
})
  .listen(8080)
