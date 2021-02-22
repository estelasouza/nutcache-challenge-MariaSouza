import React, { Component } from 'react'
import "./style.css"


class Home extends Component {

    render(){
    return(
        <>

        <h1 className="home"> Initial page</h1>
        <h3 className="home"> Welcome to challenge Nutcache </h3>
        <div className="container">
            <div className="d-grid gap-2 col-6 mx-auto">
            <a href="/home" className="btn btn-outline-dark">Tap here to acess list </a>
            </div>
        </div>

        </>
    )}
}

export default Home