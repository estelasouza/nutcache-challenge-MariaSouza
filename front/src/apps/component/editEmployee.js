import React from 'react';  
import './style.css';  
import NultemployeeService from '../service/nultemployee'

class EditEmployee extends React.Component {  


constructor(props){
        super(props);
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount(){
        const employee = await NultemployeeService.getId(this.props.id)
        await this.setState({employee: employee.data})
        // console.log(this.state.employee)

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
    
    async handleSubmit(event) {
        event.preventDefault()
        const data = this.state
        console.log(data)
        // await NultemployeeService.put()
        }

  render() {


      let label = ['name','email','cpf']
      let team = [ 'team','Mobile', 'FrontEnd', 'BackEnd']
      let gender = ['gender','Woman','Man','Other']


      return(
    <div className="display container popup color">
        <form className="home"  onSubmit={this.handleSubmit}>
        {
            label.map(nameLabel=>{
              return( 
                  <div className="mb-3 d1">
                   <label className="form-label">{nameLabel}</label>
                   <input  required onChange={event => this.handleChange(event)} name={nameLabel} placeholder={nameLabel} id={nameLabel} type="text"  />
                   </div>
                )
            })
       }

          <select name="team" required value={this.state.value} onChange={this.handleChange} >
    {team.map(x=>{
    return( 
        <option value={x}>{x}</option>
        )
    })}
    </select>
    
    <select name="gender" className="mb-3">
        {
            gender.map(g=>{
        return(
        <option onChange={event => this.handleChange(event)} value={g}>{g}</option>
        )
            })
        }
    </select>
    <div>


    <label className="form-label">Birthday</label>

    <input required type="date" name='birth_day' onChange={event => this.handleChange(event)} required />

    <label  className="form-label" >Start Date</label>

    <input required type="date" name='start_date' onChange={event => this.handleChange(event)} required />
    </div>
    <div>


        <button type="submit" value="Submit" className="btn btn-outline-success">Submit</button>

    <button className="btn btn-outline-primary" onClick={this.props.closePopup}>Close</button>  
    </div>
        </form>
      </div>
);  
}  
}  

export default EditEmployee;