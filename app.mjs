import fs from 'fs'
import sharp from 'sharp'

const inputFileName = 'lion.jpeg'
const outputFileName = 'out.jpeg'
const file = fs.readFileSync(inputFileName)
sharp(file)
.resize(900,900,{fit: 'inside'})
.jpeg({
    quality: 50
})
.toFile(outputFileName)

