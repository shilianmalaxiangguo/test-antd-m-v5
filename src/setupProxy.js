
const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
  app.use(proxy('/pay/', { 
       target: ' http://qjyx.info:8080',
       secure: false,
       changeOrigin: true,
       // cookieDomainRewrite: "http://localhost:3000"
    }));
  }