var QRCode = require('qrcode')

var url="http://rev4.tmsmusic.tokyo/pre/in";
QRCode.toDataURL(url, function (err, res) {
  console.log(res)
})
