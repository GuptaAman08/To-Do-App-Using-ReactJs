import React, { Component } from 'react';

class AddItem extends Component{
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e);
        
        this.props.addItem(this.state)
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div className="AddItems">
                <form onSubmit={this.handleSubmit}>
                    <label>Add new Item: </label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}
export default AddItem