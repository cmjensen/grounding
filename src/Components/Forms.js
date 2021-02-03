import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sense1: '',
            sense2: '',
            sense3: '',
            sense4: '',
            sense5: '',
            hasSubmitted: false
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addAnchor(this.props.sense, this.state)
    }

    handleDelete = () => {
        this.props.deleteAnchor(this.props.sense)
        this.setState({
            sense1: '',
            sense2: '',
            sense3: '',
            sense4: '',
            sense5: '',
            hasSubmitted: false
        })
    }
//if they have submitted, update. if they haven't, add it and mark that they updated it
    handleAdd = () => {
        if(this.state.hasSubmitted) {
            this.props.updateAnchor(this.props.sense)
        } else { 
            this.setState({
                hasSubmitted: true
            })
            this.props.addAnchor(this.props.sense, this.state)
        }
    }

    render() {
        return <div className='see-form'>
            
        <form onSubmit={e => this.handleSubmit(e)}
            className='form'>
            <input 
                className='inputs'
                name='sense1'
                value={this.state.sense1}
                onChange={e => this.handleChange(e)}
                type='text'
                />
            <input 
                className='inputs'
                name='sense2'
                value={this.state.sense2}
                onChange={e => this.handleChange(e)}
                />
            <input 
                className='inputs'
                name='sense3'
                value={this.state.sense3}
                onChange={e => this.handleChange(e)}
                />
            <input 
                className='inputs'
                name='sense4'
                value={this.state.sense4}
                onChange={e => this.handleChange(e)}
                />
            <input 
                className='inputs'
                name='sense5'
                value={this.state.sense5}
                onChange={e => this.handleChange(e)}
                />
            <button 
                type='submit'
                className='button'
                onClick={() => this.handleAdd()}>Submit</button>
            <button 
                type='submit'
                className='button'
                onClick={() => this.handleDelete()}>Delete</button>
        </form>
        
    </div>
    }
}

export default Forms