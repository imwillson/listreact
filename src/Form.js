import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            job: '',
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value} = event.target
        // const name = event.target.name



        // inputChangeHandler(event) {
        //     this.setState({ [event.target.name]: event.target.value });
        // }        
        // As compared to usual approach to named each element separately like this.setState({ userName: e.target.value }); This will handle multiple elements of form as an array and no need to set each individual element
        this.setState({
            [name] : value,
        })
    }

    
    //attaches the "database in App" to the state in form
    //passes "form states" as a character paramter into handleSubmit
    //second line is used for resetting the state of this app back to blank! important
    submitForm = () => {
        this.props.handleSubmit(this.state)
        
        // console.log(this.state)
       
        this.setState(this.initialState)
        
    }
    render() {
        const { name,job } = this.state;

        return (
            <form>
                <label>Name</label>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label>Job</label>
                <input 
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange} />
                <input 
                    type="button" 
                    value="Submit" 
                    onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;