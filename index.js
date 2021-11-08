const Corrosion = require('corrosion');
const http = require('http');
const proxy = new Corrosion({
      prefix: '/service/',
      codec: 'xor',
});

http.createServer().on('upgrade', proxy.upgrade).listen(8080);
