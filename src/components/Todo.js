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

    onDeleteClick = (i) => {
        const newArr = this.state.list.filter((item, index) => i !== index);
        this.setState({list: newArr})
    }

    render() {
        return (
            <div>
               <input value={this.state.input} onChange={this.onHandleChange}/>
               <button onClick={this.onHandleClick}>ADD</button>
                <ul>
                    {this.state.list.map((item, index) =>
                        <div>
                            <li style={{display: "inline-block", marginRight: 10}} key={index}>{item}</li>
                            <button onClick={() => this.onDeleteClick(index)}>Delete</button>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default Todo;
