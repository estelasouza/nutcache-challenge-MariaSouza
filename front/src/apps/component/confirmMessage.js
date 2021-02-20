import React from 'react';  
import './style.css';  

class ConfirmMessage extends React.Component {  
    delete(pros){
        console.log('aqui')
        console.log(pros)
    }
  render() {  
return (  
<div className='popup'>  

<h1 >Você tem certeza que quer apagar?</h1>  

    <button className="btn btn-danger " onClick={this.delete(this.props.id)}>Yes</button>  
    <button className="btn btn-primary" onClick={this.props.closePopup}>No</button>  

</div>  

);  
}  
}  

export default ConfirmMessage;