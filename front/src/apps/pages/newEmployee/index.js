import "./style.css"
import React from 'react'
import NultemployeeService from '../../service/nultemployee'
class NewEmployee extends React.Component{

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
    async handleSubmit(event) {
        event.preventDefault()
        const data = this.state

        console.log(data)
        await NultemployeeService.post(data)
        alert('New employee add!')
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
          this.setState({
            itemvalues: [{}]
          });        
        document.location = '/home'

        }

      render() {
          let label = ['name','email','cpf']
          let team = [ 'team','Mobile', 'FrontEnd', 'BackEnd']
          let gender = ['gender','Woman','Man','Other']
        
        return(
        <div className="display container popup">
            <form className="home"  onSubmit={this.handleSubmit}>
            {
                label.map(value=>{
                  return( 
                      <div className="mb-3 d1">
                       <label className="form-label">{value}</label>
                       <input required placeholder={value} onChange={event => this.handleChange(event)}  className="form-control"type="text" name={value} id={value} />
                       </div>
                    )
                })
           }
      

              <select name="team" value={this.state.value} onChange={this.handleChange} >
        {team.map((x,i)=>{
        return( 
            <option value={i}>{x}</option>
            )
        })}
        </select>

        <select name="gender" value={this.state.value}  onChange={this.handleChange} className="mb-3">
        
            {
                gender.map((g,i)=>{
            return(
                <option required value={i}>{g}</option>
                )})
            }
        </select>
        <div>
        <label className="form-label">Birthday</label>

        <input type="date" name='birth_day' onChange={event => this.handleChange(event)} required />

        <label className="form-label" >Start Date</label>

        <input type="date" name='start_date' onChange={event => this.handleChange(event)} required />
        </div>

        <div>
            <button className="btn btn-outline-dark" type="submit">Submit</button>
            <button className="btn btn-outline-primary" onClick={this.props.closePopup}>Cancel</button>
        </div>
            </form>
          </div>
          )
      }
}

export default NewEmployee


