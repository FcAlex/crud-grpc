import React from 'react'

export default class New extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {index, car} = this.props
        return (
            <div>
                <a className="btn" role="button" data-bs-toggle="modal" data-bs-target={`#editCar${index}`}>
                    <i className="bi bi-pencil-square"></i>
                </a>

                <form action="/update" method="post">
                    <div className="modal fade" id={`editCar${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Atualizar Veiculo</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="modal-body">

                                        <div className="row m-2">
                                            <div className="col-5">
                                                <label htmlFor="nome" className="col-form-label">Nome: </label>
                                            </div>
                                            <div className="col-6">
                                            <input type="text" defaultValue={car.nome} id="nome" className="form-control" name="nome" />
                                            </div>
                                        </div>

                                        <div className="row m-2">
                                            <div className="col-5">
                                                <label htmlFor="marca" className="col-form-label">Marca: </label>
                                            </div>
                                            <div className="col-6">
                                                <input type="text" defaultValue={car.marca} id="marca" className="form-control" name="marca" />
                                            </div>
                                        </div>

                                        <div className="row m-2">
                                            <div className="col-5">
                                                <label htmlFor="anoFab" className="col-form-label">Ano de Fabricação: </label>
                                            </div>
                                            <div className="col-6">
                                                <input type="number" defaultValue={car.anoFab} min="1900" max="2021" id="anoFab" name="anoFab" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="row m-2">
                                            <div className="col-5">
                                                <label htmlFor="anoMod" className="col-form-label">Ano do Modelo: </label>
                                            </div>
                                            <div className="col-6">
                                                <input type="number" defaultValue={car.anoMod} min="1900" max="2021" id="anoMod" name="anoMod" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="row m-2">
                                            <div className="col-5">
                                                <label htmlFor="preco" className="col-form-label">Preço: </label>
                                            </div>
                                            <div className="col-6">
                                                <input type="number" value={car.preco} id="preco" className="form-control" name="preco" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <input type="hidden" name="id" className="form-control" value={car.id} required="required" />
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                                    <button type="submit" className="btn btn-primary">Atualizar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}