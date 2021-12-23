const http=require('http')
const port=3002
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'})
    res.write('this is a node module')
    res.end()
} )
server.listen(port, 'LocalHost')

// File system module

const fs=require('fs')
try {
    const file=fs.readFileSync('/Users/ndetainnocent/Downloads/sample.txt',{'encoding':'utf8'})
 console.log(file) 
} catch (error) {
    console.log(error ,'ERROR')
}

// Writing to a file

    const writeFile=fs.writeFile('filezer.txt', 'Hello this is the end of the year 2021', 'utf-8', function(err){
       
    })

    // Streams in  node
  const stream=  fs.createReadStream('filezer.txt','utf-8')

  stream.on('data', (result)=>console.log(result.toString()))


const writeStream=fs.createWriteStream('stream.txt')
stream.pipe(writeStream)


// creating our own modules in node

const{ add, multiply,divide}=require('./math')

const b=divide(10, 2)
console.log(b)

const c=add(3,565)
console.log(c)
const t=multiply(44,53)
console.log(t)


// node js events
const util=require('util')
const events=require('events')
const { emit } = require('process')
const eventEmitter=events.EventEmitter
const ee=new eventEmitter()
ee.on('speak',()=>{
    console.log('Say hello')
})
ee.on('eat',()=>{
  console.log('Eating')
})


ee.emit('speak')
ee.emit('eat')
util.inherits(Car.eventEmitter)
function Car(){
    eventEmitter.call(this)
    this.hitGasPadel=function(){
        this.emit('accelerate')
    }
    this.hitBrakePadel=function(){
        this.emit('brake')
    }
}


const Car1=new Car()

Car1.on('accelerate', function(){
    console.log('Accelerating')
})

Car1.on('brake',function(){
    console.log('Stopping')
})
Car1.hitGasPadel()
Car1.hitBrakePadel()

 