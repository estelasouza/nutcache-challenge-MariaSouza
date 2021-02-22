import React from 'react';  
import './style.css';  
import NultemployeeService from '../../service/nultemployee'

class EditEmployee extends React.Component {  


constructor(props){
        super(props);
        this.state = this.initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    initialState = {
        id:'',
        name:'',
        email:'',
        cpf:'',
        team:[ ],
        gender:[],
        start_date:'',
        birth_day:'',
    }
    async componentDidMount(){
        const employee = await NultemployeeService.getId(this.props.id)
        this.setState({
            id: employee.data.id,
            email: employee.data.email,
            name: employee.data.name,
            cpf: employee.data.cpf,
            start_date: employee.data.start_date,
            birth_day: employee.data.birth_day,
            team: employee.data.team,
            gender: employee.data.gender
        })
       
       
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
        const id = this.props.id

        await NultemployeeService.put(id,data)
        alert('Sucess edit employee!')
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
          this.setState({
            itemvalues: [{}]
          });        
        document.location = '/home'
        }

  render() {
      
      let gender = ['gender','Woman','Man','Other']
      let team = [ 'team','Mobile', 'FrontEnd', 'BackEnd']
      
      const { email,cpf,name,start_date, birth_day} = this.state

      return(
    <div className="display container popup color">
        <form className="home" key={this.props.id} onSubmit={this.handleSubmit}>
      
      <div className="mb-3 d1">
       <label className="form-label">Name</label>
           
       <input required onChange={event => this.handleChange(event)}  value={[name]} name="name" />
       </div>
       <div className="mb-3 d1">
       <label className="form-label">Email</label>
           
       <input required onChange={event => this.handleChange(event)}  value={email} name="email" />
       </div>
       <div className="mb-3 d1">
       <label className="form-label">Cpf</label>

       <input required onChange={event => this.handleChange(event)}  value={cpf} name="cpf" />
</div>

          <select name="team" required value={this.state.value} onChange={this.handleChange} >
    {team.map((x,i)=>{
    return( 
        <option value={i}>{x}</option>
        )
    })}
    </select>
    
    
    <select name="gender" required value={this.state.value} onChange={this.handleChange} className="mb-3">
        {
            gender.map((g,i)=>{
                return(
                <option onChange={event => this.handleChange(event)} value={i}>{ g }</option>
                )
            })
        }
    </select>
    <div>


    <label className="form-label">Birthday</label>

    <input required type="date" value={birth_day} name="birth_day" onChange={event => this.handleChange(event)} required />

    <label  className="form-label" >Start Date</label>

    <input required type="date" value={start_date} name="start_date" onChange={event => this.handleChange(event)} required />
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