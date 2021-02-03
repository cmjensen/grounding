import React, { Component } from 'react'
import axios from 'axios'
import Forms from './Forms'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            sight: [],
            taste: [],
            smell: [],
            hear: [],
            touch: [],
        }
    }

    componentDidMount() {
        this.getAnchor()
    }

    getAnchor = sense => {
        axios.get(`/api/getAnchor/${ sense }`)
        .then( res => {
            if(res.json(sense) === 'sight') {
                this.setState({
                    sight: res.data
                })
            } else if(sense === 'taste') {
                this.setState({
                    taste: res.data
                })
            } else if(sense === 'smell') {
                this.setState({
                    smell: res.data
                })
            } else if(sense === 'hear') {
                this.setState({
                    hear: res.data
                })
            } else if(sense === 'touch') {
                this.setState({
                    touch: res.data
                })
            }
        }).catch( err => console.log(err))
    }

    addAnchor = (sense, sensoryData) => {
        axios.post(`/api/addAnchor/${ sense }`, { sensoryData })
        .then( res => {
            if(sense === 'sight') {
                this.setState({
                    sight: res.data
                })
            } else if(sense === 'taste') {
                this.setState({
                    taste: res.data
                })
            } else if(sense === 'smell') {
                this.setState({
                    smell: res.data
                })
            } else if(sense === 'hear') {
                this.setState({
                    hear: res.data
                })
            } else if(sense === 'touch') {
                this.setState({
                    touch: res.data
                })
            }
        }).catch( err => console.log(err))
    }

    updateAnchor = sense => {
        axios.put(`/api/updateAnchor/${ sense }`)
        .then( res => {
            if(sense === 'sight') {
                this.setState({
                    sight: res.data
                })
            } else if(sense === 'taste') {
                this.setState({
                    taste: res.data
                })
            } else if(sense === 'smell') {
                this.setState({
                    smell: res.data
                })
            } else if(sense === 'hear') {
                this.setState({
                    hear: res.data
                })
            } else if(sense === 'touch') {
                this.setState({
                    touch: res.data
                })
            }
        }).catch( err => console.log(err))
    }

    deleteAnchor = sense => {
        axios.delete(`/api/deleteAnchor/${ sense }`)
        .then( res => {
            if(sense === 'sight') {
                this.setState({
                    sight: res.data
                })
            } else if(sense === 'taste') {
                this.setState({
                    taste: res.data
                })
            } else if(sense === 'smell') {
                this.setState({
                    smell: res.data
                })
            } else if(sense === 'hear') {
                this.setState({
                    hear: res.data
                })
            } else if(sense === 'touch') {
                this.setState({
                    touch: res.data
                })
            }
        }).catch( err => console.log(err))
    }

    addSenses = ( senseName, newArr ) => {
        this.setState({
            [senseName]: newArr
        })
    }

    render() {
        return <div>
            <h2>5 Things You See</h2>
            <Forms sense='sight'
                    addSenses={this.addSenses}
                    addAnchor={this.addAnchor}
                    updateAnchor={this.updateAnchor}
                    deleteAnchor={this.deleteAnchor}
                    toggleEditing={this.toggleEditing}/>

            <h2>5 Things You Taste</h2>
            <Forms sense='taste'
                    addSenses={this.addSenses}
                    addAnchor={this.addAnchor}
                    updateAnchor={this.updateAnchor}
                    deleteAnchor={this.deleteAnchor}
                    toggleEditing={this.toggleEditing}/>

            <h2>5 Things You Smell</h2>
            <Forms sense='smell'
                    addSenses={this.addSenses}
                    addAnchor={this.addAnchor}
                    updateAnchor={this.updateAnchor}
                    deleteAnchor={this.deleteAnchor}
                    toggleEditing={this.toggleEditing}/>

            <h2>5 Things You Hear</h2>
            <Forms sense='hear'
                    addSenses={this.addSenses}
                    addAnchor={this.addAnchor}
                    updateAnchor={this.updateAnchor}
                    deleteAnchor={this.deleteAnchor}
                    toggleEditing={this.toggleEditing}/>

            <h2>5 Things You Feel</h2>
            <Forms sense='touch'
                    addSenses={this.addSenses}
                    addAnchor={this.addAnchor}
                    updateAnchor={this.updateAnchor}
                    deleteAnchor={this.deleteAnchor}
                    toggleEditing={this.toggleEditing}/>
            </div>
    }
}

export default Main

