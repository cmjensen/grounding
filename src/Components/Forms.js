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
        console.log(this.props.sense)
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

    render() {
        return <div className='main'>
            
        <form onSubmit={e => this.handleSubmit(e)}>
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
                className='add-button'
                onClick={() => this.props.addSenses( this.props.sense, [ this.state.sense1, this.state.sense2, this.state.sense3, this.state.sense4, this.state.sense5 ] )}>Submit</button>
            <button 
                type='submit'
                className='delete'
                onClick={() => this.handleDelete()}>Delete</button>
        </form>
        
    </div>
    }
}

export default Forms