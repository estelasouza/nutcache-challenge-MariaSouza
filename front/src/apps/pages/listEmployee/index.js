
import React, { Component } from 'react'
import "./style.css"

import NultemployeeService from '../../service/nultemployee'

import EditEmployee from '../../component/editEmployee';  
import NewEmployee from '../newEmployee/index'
import ConfirmMessage from '../../component/confirmMessage'


class ListEmployee extends Component {
    state = {
        employee:   [],
        deleteEmployee:false,
        editEmployee:false,
        CreateEmployee:false  ,
        teste :"testando"
     }
    async componentDidMount(){
        const  Home  = await NultemployeeService.getAll()
        
        await this.setState({employee: Home.data})


    }
    createEmployeePopup() {  
        this.setState({  
            CreateEmployee: !this.state.CreateEmployee  
        });  }  

    editEmployeePopup(id) {  
    this.setState({  
        editEmployee: !this.state.editEmployee  ,
        id:id

    });  }

    deleteEmployeePopup(id) {  
        this.setState({  
            deleteEmployee: !this.state.deleteEmployee ,
            id:id
        });
    }  
    
    render(){
        const { employee } = this.state || []
        const team = ['','Mobile','FrontEnd','BackEnd']
    return(

    <>

        <h1 className="home">List all employee</h1>
        <div className="container">
    <table className=" table table-striped tam-table">
    <thead >
        <tr className="">
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Date</th>
        <th scope="col">Team</th>
        <th scope="col">Action</th>
       
        </tr>
    </thead>
    <tbody >
        {employee.map((dado,i) => {
            
            return(
            <tr key={dado.id}>
            <td>{i+1}</td>
            <td>{dado.name}</td>
            <td> {dado.email}</td>
            <td>{dado.start_date}</td>
            <td>{team[dado.team]}</td>
            <td>
            <button className="btn btn-outline-primary" onClick={this.editEmployeePopup.bind(this,dado.id)}>edit</button>
            <button className="btn btn-outline-danger" onClick={this.deleteEmployeePopup.bind(this,dado.id)}>delete</button></td>
            </tr>)})}
    </tbody>
    </table>
    <button className="btn btn-success right" onClick={this.createEmployeePopup.bind(this)}>new employee</button>
    </div>
    <div>  

{this.state.editEmployee ?  
<EditEmployee  
        id={this.state.id}
          closePopup={this.editEmployeePopup.bind(this)}  
/>  
: null  
}  

{
    this.state.CreateEmployee ?
    <NewEmployee
    
    closePopup={this.createEmployeePopup.bind(this)}  />:null
}

{   
    
     this.state.deleteEmployee ?
    <ConfirmMessage 
        id = {this.state.id}
        closePopup={this.deleteEmployeePopup.bind(this)}  />:null
}
</div> 
    </>
)}
}

export default ListEmployee