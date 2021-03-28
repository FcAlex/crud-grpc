import client from './client.js'
import express from 'express'
import viewExpress from 'express-react-views'
import path from 'path'

const app = express()

app.set('views', path.join(path.resolve(), 'client/views'))
app.set('view engine', 'jsx')
app.engine('jsx', viewExpress.createEngine())

app.get("/", (_, res) => {
    client.listCar(null, (_, data) => {
        console.log('Client: listCar')
        res.render('index', data);
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

// export default class ClientController {
//     listAll() {
        
//     }
    
//     get(id) {
//         client.getCar({id: id}, (err, data) => {
//             if (!err) {
//                 return data
//             } else {
//                 console.error(err)
//             }
//         })
//     }
    
//     create(car) {
//         client.createCar(car, (err, data) => {
//             if (!err) {
//                 return data
//             } else {
//                 console.error(err)
//             }
//         })
//     }
    
//     remove(id) {
//         client.deleteCar({id: id}, (err, data) => {
//             if (!err) {
//                 return data
//             } else {
//                 console.error(err)
//             }
//         })
//     }
    
//     removeAll() {
//         client.deleteAllCars(null, (err, data) => {
//             if (!err) {
//                 return data
//             } else {
//                 console.error(err)
//             }
//         })
//     }
// }