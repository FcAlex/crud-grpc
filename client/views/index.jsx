import React, { Children } from 'react'

export default class extends React.Component {
    render() {
        return (
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css"></link>
                <title>Document</title>
            </head>
            <body>
                <div class="container">
                    <table class="table table-striped">
                        <thead class="text-center">
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
                        <tbody class="text-center">
                            {this.createTable()}
                        </tbody>
                    </table>
                </div>
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
                    <a class="btn" role="button">
                        <i class="bi bi-pencil-square"></i>
                    </a>
                    <a class="btn" role="button">
                        <i class="bi bi-trash"></i>
                    </a>
                </td>
            )

            table.push(<tr>{children}</tr>)
        }

        return table
    }
}