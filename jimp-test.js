var Jimp = require('jimp');
 
Jimp.read('lion.jpeg', (err, lenna) => {
  if (err) throw err;
  lenna
    .scaleToFit(900, 900)
    .quality(60)
    .write('out-jimp.jpg');
});