import "./style.css"
import React from 'react'


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
    handleSubmit(event) {
        event.preventDefault()
        const data = this.state
        console.log(data)

          
        }

      render() {
          let label = ['name','email','cpf']
          let team = [ 'mobile', 'FrontEnd', 'BackEnd','']
          let gender = ['woman','man','other']
        
        return(
        <div className="display container popup">
            <form className="home"  onSubmit={this.handleSubmit}>
            {
                label.map(value=>{
                  return( 
                      <div className="mb-3 d1">
                       <label className="form-label">{value}</label>
                       <input  onChange={event => this.handleChange(event)}  className="form-control"type="text" name={value} id={value} />
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
            <button className="btn btn-outline-dark" type="submit">submit</button>
            </form>
          </div>
          )
      }
}

export default NewEmployee


