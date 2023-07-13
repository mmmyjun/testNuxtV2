// node中的读取流createReadStream、写入流createWriteStream和管道流pipe
// https://blog.csdn.net/qq_40323256/article/details/110944740

// createReadStream createWriteStream
const fs = require('fs');
let readStream = fs.createReadStream('./readInput.txt');
let writeStream = fs.createWriteStream('./writeInput.txt');
readStream.pipe(writeStream);
