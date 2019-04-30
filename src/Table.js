import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData.map((row,index) => {
        return (
            <tr key={index}>
                {/* {console.log("Row"+index)} */}
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td> 
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                    {/* The onClick function must pass through a function that returns the 
                    removeCharacter() method, otherwise it will try to run automatically. */}
                </td>
            </tr>
        
        )
    })

    return <tbody>{rows}</tbody>
}

  class Table extends Component { 
    render() {
        // const characterData = this.props.characterData
        // const removeCharacter = this.props.removeCharacter

        const { characterData, removeCharacter } = this.props

        return(
            <table> 
                <TableHeader />
                {/* <TableBody characterArray={characterData}/>  */}
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
           </table>
        )    
    }
}
  
export default Table