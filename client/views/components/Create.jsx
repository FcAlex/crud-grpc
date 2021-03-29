import React from 'react'

export default class New extends React.Component {
    render() {
        return (
            <div>
                <a className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newCar">
                    <i className="bi bi-plus"></i> Adicionar Carro
                </a>

                <form action="/save" method="post">
                    <div className="modal fade" id="newCar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Adicionar Veiculo</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row m-2">
                                        <div className="col-5">
                                            <label htmlFor="nome" className="col-form-label">Nome: </label>
                                        </div>
                                        <div className="col-6">
                                            <input type="text" id="nome" className="form-control" name="nome"/>
                                        </div>
                                    </div>

                                    <div className="row m-2">
                                        <div className="col-5">
                                            <label htmlFor="marca" className="col-form-label">Marca: </label>
                                        </div>
                                        <div className="col-6">
                                            <input type="text" id="marca" className="form-control" name="marca"/>
                                        </div>
                                    </div>

                                    <div className="row m-2">
                                        <div className="col-5">
                                            <label htmlFor="anoFab" className="col-form-label">Ano de Fabricação: </label>
                                        </div>
                                        <div className="col-6">
                                            <input type="number" min="1900" max="2021" id="anoFab" name="anoFab" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="row m-2">
                                        <div className="col-5">
                                            <label htmlFor="anoMod" className="col-form-label">Ano do Modelo: </label>
                                        </div>
                                        <div className="col-6">
                                            <input type="number" min="1900" max="2021" id="anoMod" name="anoMod" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="row m-2">
                                        <div className="col-5">
                                            <label htmlFor="preco" className="col-form-label">Preço: </label>
                                        </div>
                                        <div className="col-6">
                                            <input type="number" id="preco" className="form-control" name="preco"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                                    <button type="submit" className="btn btn-primary">Criar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}