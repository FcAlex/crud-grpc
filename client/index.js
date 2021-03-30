import client from './client.js'
import express from 'express'
import viewExpress from 'express-react-views'
import path from 'path'

const app = express()

app.set('views', path.join(path.resolve(), 'client/views'))
app.set('view engine', 'jsx')
app.engine('jsx', viewExpress.createEngine())

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

app.get("/", (_, res) => {
    client.listCar(null, (_, data) => {
        console.log('Client: listCar')
        res.render('index', data);
    })
})

app.post("/save", (req, res) => {
    let car = {
        nome: req.body.nome,
        marca: req.body.marca,
        anoFab: req.body.anoFab,
        anoMod: req.body.anoMod,
        preco: req.body.preco
    }

    client.createCar(car, (error, data) => {
        if (error) throw error

        console.log('Car created successfully', data)
        res.redirect("/")
    })
})

app.post("/remove", (req, res) => {

    client.deleteCar({id: req.body.id}, (error, data) => {
        if (error) throw error

        console.log('Car removed successfully', data)
        res.redirect("/") 
    })
})

app.post("/update", (req, res) => {
    let car = {
        nome: req.body.nome,
        marca: req.body.marca,
        anoFab: req.body.anoFab,
        anoMod: req.body.anoMod,
        preco: req.body.preco
    }

    client.updateCar({car: car, id: req.body.id}, (error, data) => {
        if (error) throw error

        console.log('Car updated successfully', data)
        res.redirect("/") 
    })
})

app.post("/removeAll", (_, res) => {

    client.deleteAllCars({}, (error, data) => {
        if(error) throw error

        console.log("All cars removed successfully", data)
        res.redirect("/")
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});  