import fs from 'fs'
import sharp from 'sharp'

const inputFileName = 'sample.png'
const outputFileName = 'sample_out.png'
const file = fs.readFileSync(inputFileName)
sharp(file).resize(900,900,{fit: 'inside'}).toFile(outputFileName)