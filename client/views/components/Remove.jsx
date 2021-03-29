import React from 'react'

export default class New extends React.Component {
    render() {
        const {index, carId} = this.props
        return (
            <div>
                <a className="btn" role="button" data-bs-toggle="modal" data-bs-target={`#removeCar${index}`}>
                    <i className="bi bi-trash"></i>
                </a>

                <form action="/remove" method="post">
                    <div className="modal fade" id={`removeCar${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Remover Veiculo</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Você tem certeza disso?
                                    <br/> {carId}
                                </div>
                                <div className="modal-footer">
                                    <input type="hidden" name="id" defaultValue={carId} className="form-control" required="required" />
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                                    <button type="submit" className="btn btn-primary">Remover</button>
                                </div>
                            </div> 
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}