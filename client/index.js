import client from './client.js'

client.listCar({}, (error, notes) => {
    if (!error) {
        console.log(notes)
    } else {
        console.error(error)
    }
})

