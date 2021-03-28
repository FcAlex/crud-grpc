import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

const PROTO_PATH = './car.proto'

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
})

const CarService = grpc.loadPackageDefinition(packageDefinition).CarService
const client = new CarService('localhost:8080', grpc.credentials.createInsecure())

export default client
