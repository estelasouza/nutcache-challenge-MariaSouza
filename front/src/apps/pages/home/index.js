import React, { Component } from 'react'
import "./style.css"


class Home extends Component {

    render(){
    return(
        <>

        <h1 className="home"> Home page</h1>
        <h3 className="home"> Welcome </h3>
        <div className="container">
            <div className="d-grid gap-2 col-6 mx-auto">
            <a href="/home" className="btn btn-outline-dark">Acess list </a>
            </div>
        </div>

        </>
    )}
}

export default Home