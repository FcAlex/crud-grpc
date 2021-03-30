import React from 'react'

export default class RemoveAll extends React.Component {
    render() {
        return (
            <div className="col-auto">
                <a className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#removeAllCar">
                    <i className="bi bi-x"></i> Remover Todos
                </a>

                <form action="/removeAll" method="post">
                    <div className="modal fade" id="removeAllCar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Remover Veiculo</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Você tem certeza disso?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                                    <button type="submit" className="btn btn-primary">Remover Todos</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}