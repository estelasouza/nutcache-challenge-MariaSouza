
import React, { Component } from 'react'
import "./style.css"

import NultemployeeService from '../../service/nultemployee'

import EditEmployee from '../editEmployee/index';  
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
                
            <button className="btn btn-outline-primary" onClick={this.editEmployeePopup.bind(this,dado.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>
            <button className="btn btn-outline-danger bi bi-trash-fill" onClick={this.deleteEmployeePopup.bind(this,dado.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button></td>
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