import React from 'react';  
import './style.css';  
import NultemployeeService from '../service/nultemployee'

class EditEmployee extends React.Component {  

    // async componentDidMount(){
    //     // const id =this.props.match.params.id
    //     console.log('to aq')
    //     const  Edit  = await NultemployeeService.put()
    //     console.log(Edit.data)
    //     // this.setState({empresa:Home.data[0]})
// }
constructor(props){
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value,
            birthday:event.target.value ,
            gender :event.target.value , // f/m 
            email:event.target.value ,
            cpf:event.target.value ,
            startDate:event.target.value , // mm/yyyy,
        }
        )

        }
        handleSubmit(event) {
            event.preventDefault()

          
            console.log(this.state)

          
        }
        
    
    

  render() {


      let label = ['name','email','birth','cpf']
      let team = [ 'mobile', 'FrontEnd', 'BackEnd','']
      let gender = ['woman','man','other']


      console.log('foi chamado')
      return(
    <div className="display container popup color">
        <form className="home"  onSubmit={this.handleSubmit}>
        {
            label.map(nameLabel=>{
              return( 
                  <div className="mb-3 d1">
                   <label className="form-label">{nameLabel}</label>
                   <input  onChange={event => this.handleChange(event)} name={nameLabel} id={nameLabel} type="text"  />
                   </div>
                )
            })
       }
          <select>
    {team.map(x=>{
    return( 
        <option value={x}>{x}</option>
        )
    })}
    </select>
    <div className="mb-3">
        {
            gender.map(g=>{
        return(<div >
        <input onChange={event => this.handleChange(event)} name={g}  type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label>{g}</label>
        </div>
)
            })
        }
    </div>
        <button type="submit" value="Submit">submit</button>

    <button className="btn btn-success" onClick={this.props.closePopup}>Edit</button>  
<button className="btn btn-primary" onClick={this.props.closePopup}>Close</button>  
        </form>
      </div>
);  
}  
}  

export default EditEmployee;