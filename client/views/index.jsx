import React from 'react'
import New from './components/New.jsx'

export default class extends React.Component {
    render() {
        return (
            <html lang="pt-br">
            <head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css"></link>
                <title>Document</title>
            </head>
            <body>
                <div className="container">
                    <h1 className="text-center">Gerenciador de Carros</h1>
                    <New />
                    <table className="table table-striped">
                        <thead className="text-center">
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Marca</th>
                                <th>Ano de Fabricação</th>
                                <th>Ano do Modelo</th>
                                <th>Preço</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {this.createTable()}
                        </tbody>
                    </table>
                </div>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"></script>
            </body>
            </html>
        )
    }

    createTable() {
        let cars = this.props.cars
        let table = []


        for (const i in cars) {
            let children = []

            children.push(<td>{cars[i].id}</td>)
            children.push(<td>{cars[i].nome}</td>)
            children.push(<td>{cars[i].marca}</td>)
            children.push(<td>{cars[i].anoFab}</td>)
            children.push(<td>{cars[i].anoMod}</td>)
            children.push(<td>{cars[i].preco}</td>)
            children.push(
                <td>
                    <a className="btn" role="button" data-bs-toggle="modal" data-bs-target="#newCar">
                        <i className="bi bi-pencil-square"></i>
                    </a>
                    <a className="btn" role="button">
                        <i className="bi bi-trash"></i>
                    </a>
                </td>
            )

            table.push(<tr key={i}>{children}</tr>)
        }

        return table
    }
}