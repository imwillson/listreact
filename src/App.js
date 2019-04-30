import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    

    state = {
        // characters: [
            
        //     {
        //         name: 'Charlie',
        //         job: 'Janitor',
        //     },
        //     {
        //         name: 'Mac',
        //         job: 'Bouncer',
        //     },
        //     {
        //         name: 'Dee',
        //         job: 'Aspiring Actress',
        //     },
        //     {
        //         name: 'Dennis',
        //         job: 'Bartner',
        //     },
            
        // ]
        characters: [],
    }
    // index is a a parameter in the arrow function
    removeCharacter = index => { 
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                console.log(index + " removoed ")
                return i !== index 

    
            }),
        })

        
    }
    // character is a parameter in the arrow fucntion
    handleSubmit = character => {
        //rest operator vs spread operator 
        this.setState({characters: [...this.state.characters, character]})
    }
 
    render() {
        return (
            <div className="container">
                <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

// class TestApp extends Component {
//     render() {
//         return (
//             <h1>Hello World Part2!</h1>
//         )
//     }
// }



    


export default App
