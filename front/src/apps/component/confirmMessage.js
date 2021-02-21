import React from 'react';  
import './style.css';  

class ConfirmMessage extends React.Component {  
    delete(pros){
        console.log('aqui')
        console.log(pros)
    }
  render() {  
return (  
<div className='container popup color'>  

    <h1 className="center" >Você tem certeza que quer apagar?</h1>  
    <div className="center d-grid gap-2 col-6 mx-auto">

    <button className="btn btn-outline-danger " onClick={this.delete(this.props.id)}>Yes</button>  
    <button className="btn btn-outline-primary" onClick={this.props.closePopup}>No</button>  
    </div>

</div>  

);  
}  
}  

export default ConfirmMessage;