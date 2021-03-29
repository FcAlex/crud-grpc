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

app.post("/save", (req, res) => {
    console.log(req.body)
    // let car = {
    //     nome: req.body.nome,
    //     marca: req.body.marca,
    //     anoFab: req.body.anoFab,
    //     anoMod: req.body.anoMod,
    //     preco: req.body.preco
    // }

    // client.createCar(car, (error, data) => {
    //     if (error) throw error

    //     console.log('Car created successfully', data)
        res.redirect("/")
    // })
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