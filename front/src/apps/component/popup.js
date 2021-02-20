import React from 'react';  
import './style.css';  

class Popup extends React.Component {  
  render() {  
    console.log(this.props)
return (  
<div className='popup color'>  
<h1 >"aqui está um exemplo"</h1>  
<button className="btn btn-success" onClick={this.props.closePopup}>Edit</button>  
<button className="btn btn-primary" onClick={this.props.closePopup}>Close</button>  

</div>  
);  
}  
}  

export default Popup;