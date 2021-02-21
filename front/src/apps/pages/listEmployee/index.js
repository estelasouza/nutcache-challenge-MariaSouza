
import React, { Component } from 'react'
import "./style.css"

import NultemployeeService from '../../service/nultemployee'

import EditEmployee from '../../component/editEmployee';  
import NewEmployee from '../newEmployee/index'
import ConfirmMessage from '../../component/confirmMessage'


class ListEmployee extends Component {
    state = {
        employee:   [{name:"estela",email:"estela@teste.com",startDate:"22/19",team:"develop"},
        {name:"estela",email:"estela@teste.com",startDate:"22/19",team:"develop"},
        {name:"estela",email:"estela@teste.com",startDate:"22/19",team:"develop"}],
        deleteEmployee:false,
        editEmployee:false,
        CreateEmployee:false
    }
    async componentDidMount(){
        // const id =this.props.match.params.id
        console.log('to aq')
        const  Home  = await NultemployeeService.getAll()
        console.log(Home.data)
        // this.setState({empresa:Home.data[0]})

    }
    createEmployeePopup() {  
        this.setState({  
            CreateEmployee: !this.state.CreateEmployee  
        });  
         }  
    editEmployeePopup() {  
    this.setState({  
        editEmployee: !this.state.editEmployee  
    });  
        }  
    deleteEmployeePopup(id) {  

        this.setState({  
            deleteEmployee: !this.state.deleteEmployee  
        });  
                }  
    
    render(){
        const { employee } = this.state

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
            <tr >
            <td>{i+1}</td>
            <td>{dado.name}</td>
            <td> {dado.email}</td>
            <td>{dado.startDate}</td>
            <td>{dado.team}</td>
            <td>
            <button className="btn btn-outline-primary" onClick={this.editEmployeePopup.bind(this)}>edit</button>
            <button className="btn btn-outline-danger" onClick={this.deleteEmployeePopup.bind(this,i)}>delete</button></td>
            </tr>)})}
    </tbody>
    </table>
    <button className="btn btn-success right" onClick={this.createEmployeePopup.bind(this)}>new employee</button>
    </div>
    <div>  

{this.state.editEmployee ?  
<EditEmployee  
          text='Click "Close Button" to hide popup'  
          closePopup={this.editEmployeePopup.bind(this)}  
/>  
: null  
}  

{
    this.state.CreateEmployee ?
    <NewEmployee />:null
}

{   
    
     this.state.deleteEmployee ?
    <ConfirmMessage 
        id = '1'
        closePopup={this.deleteEmployeePopup.bind(this)}  />:null
}
</div> 
    </>
)}
}

export default ListEmployee