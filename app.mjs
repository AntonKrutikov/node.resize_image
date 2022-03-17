import fs from 'fs'
import sharp from 'sharp'

const inputFileName = 'sample.png'
const outputFileName = 'sample_out.jpeg'
const file = fs.readFileSync(inputFileName)
sharp(file)
.resize(900,900,{fit: 'inside'})
.jpeg({
    quality: 80
})
.toFile(outputFileName)
