import React from "react";

class Todo extends React.Component {

    state = {
        input: '',
        list: []
    }

    onHandleClick = () => {
        const newArr  = this.state.list;
        newArr.push(this.state.input);
        this.setState({ list: newArr, input: '' })

    }

    onHandleChange = (e) => this.setState({input: e.target.value})

    render() {
        return (
            <div>
               <input value={this.state.input} onChange={this.onHandleChange}/>
               <button onClick={this.onHandleClick}>ADD</button>
                <ul>
                    {this.state.list.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        );
    }
}

export default Todo;
