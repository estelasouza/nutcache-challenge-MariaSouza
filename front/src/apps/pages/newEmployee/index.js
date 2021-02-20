import "./style.css"
import React from 'react'


class NewEmployee extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name:'',
            birthday: '',
            gender : '', // f/m 
            email: '',
            cpf: '',
            startDate: '', // mm/yyyy,
            team:[ 'mobile', 'FrontEnd', 'BackEnd','']
        }
    }


      render() {
          let label = ['name','email','birth','cpf']
          let team = [ 'mobile', 'FrontEnd', 'BackEnd','']
          let gender = ['woman','man','other']
          console.log('foi chamado')
          return(
        <div className="display container popup">
            <form className="home">
            {
                label.map(value=>{
                  return( 
                      <div className="mb-3 d1">
                       <label className="form-label">{value}</label>
                       <input type="text" id={value} />
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
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label>{g}</label>
            </div>
)
                })
            }
        </div>
            <button className="btn btn-primary" type="submit">submit</button>
            </form>
          </div>
          )
      }
}

export default NewEmployee

