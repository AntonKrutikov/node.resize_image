var Jimp = require('jimp');
 
Jimp.read('lion.jpeg', (err, img) => {
  if (err) throw err;
  img
    .scaleToFit(900, 900)
    .quality(60)
    .write('out-jimp.jpg');
});