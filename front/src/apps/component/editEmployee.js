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
        this.state = {}
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        const target = event.target;
        const name = target.name
        this.setState(
            { 
                [name]: event.target.value,                
            }
            )
        
        
    }
    handleSubmit(event) {
        event.preventDefault()
        const data = this.state
        console.log(data)

          
        }
        
    
    

  render() {


      let label = ['name','email','birthday','cpf']
      let team = [ 'mobile', 'FrontEnd', 'BackEnd','']
      let gender = ['woman','man','other']


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

          <select name="team" value={this.state.value} onChange={this.handleChange} >
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
        <input onChange={event => this.handleChange(event)}  type="checkbox" className="form-check-input" name={g} id={g}/>
        <label>{g}</label>
        </div>
)
            })
        }
    </div>
        <button type="submit" value="Submit">submit</button>

    <button className="btn btn-outline-success" onClick={this.props.closePopup}>Save</button>  
    <button className="btn btn-outline-primary" onClick={this.props.closePopup}>Close</button>  
        </form>
      </div>
);  
}  
}  

export default EditEmployee;