import React from 'react';  
import './style.css';  
import NultemployeeService from '../service/nultemployee'

class ConfirmMessage extends React.Component {  
    async delete(){
        await NultemployeeService.delete(this.props.id)
        alert('deletado')
        document.location = '/home'
    }
    render() {  

    return (  
    <div className='container popup color'>  

        <h1 className="center" >Você tem certeza que quer apagar?</h1>  
        <div className="center d-grid gap-2 col-6 mx-auto">

        <button className="btn btn-outline-danger " onClick={this.delete.bind(this)}>Yes</button>  
        <button className="btn btn-outline-primary" onClick={this.props.closePopup}>No</button>  
        </div>

    </div>  

);  
}  
}  

export default ConfirmMessage;