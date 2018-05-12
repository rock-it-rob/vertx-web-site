var serverOptions = {
  'ssl': true,
  'pemKeyCertOptions': {
    'keyPath': './key.pem',
    'certPath': './cert.pem'
  }
}

var server = vertx.createHttpServer(serverOptions)
  .requestHandler(function(req) {
    req.response().end('working')
  })
  .listen(8080)
