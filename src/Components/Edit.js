import React, { Component } from 'react'

class Edit extends Component {
    constructor() {
        super()
        this.state = {
            sense1: '',
            sense2: '',
            sense3: '',
            sense4: '',
            sense5: '',
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return <div>
            <input 
                onChange={e => this.handleChange(e)}/>      
            <input 
                onChange={e => this.handleChange(e)}/>      
            <input 
                onChange={e => this.handleChange(e)}/>      
            <input 
                onChange={e => this.handleChange(e)}/>      
            <input 
                onChange={e => this.handleChange(e)}/>
            <button>
            Edit
            </button>      
        </div>
    }
}

export default Edit