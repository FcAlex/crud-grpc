import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import {v4} from 'uuid'

const PROTO_PATH = './car.proto'

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
})

const carsProto = grpc.loadPackageDefinition(packageDefinition)

const server = new grpc.Server()

const cars = [
    {
        id: "a68b823c-7ca6-44bc-b721-fb4d5312cafc",
        nome: 'Uno',
        marca: 'Fiat',
        anoFab: 2010,
        anoMod: 2010,
        preco: 20000.0
    },
    {
        id: "34415c7c-f82d-4e44-88ca-ae2a1aaa92b7",
        nome: 'Cronos',
        marca: 'Fiat',
        anoFab: 2012,
        anoMod: 2013,
        preco: 30000.0
    }
]

server.addService(carsProto.CarService.service, { 
    listCar(_, callback) {
        callback(null, {cars})
    },
    getCar(call, callback) {
        const existingCar = cars.find(c => c.id === call.request.id)

        if(existingCar) callback(null, existingCar)
        else callback({code: grpc.status.NOT_FOUND, details: "Car not found"})
    },
    createCar(call, callback) {
        let car = call.request
        car.id = v4()
        cars.push(car)

        callback(null, car)
    },
    deleteCar(call, callback) {
        const existingCarIndex = cars.findIndex(c => c.id === call.request.id)

        if(existingCarIndex != -1) {
            cars.splice(existingCarIndex, 1)
            callback(null, existingCarIndex)
        } else callback({code: grpc.status.NOT_FOUND, details: "Car not found"})
    },  
    updateCar(call, callback) {
        let existingCar = cars.find(c => c.id === call.request.id)
        
        if(existingCar) {
            existingCar.nome = call.request.car.nome
            existingCar.marca = call.request.car.marca
            existingCar.anoFab = call.request.car.anoFab
            existingCar.anoMod = call.request.car.anoMod
            existingCar.preco = call.request.car.preco
            
            callback(null, existingCar)
        } else callback({code: grpc.status.NOT_FOUND, details: "Car not found"})
    },
})

server.bindAsync('0.0.0.0:8080', grpc.ServerCredentials.createInsecure(), () => {
    console.log("Server running at http://localhost:8080")
    server.start()
})