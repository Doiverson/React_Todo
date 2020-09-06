import React from "react";

class Todo extends React.Component {

    state = {
        input: '',
        editInput: '',
        list: [],
        edit: false
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

    onHandleEdit = () => {

        this.setState({edit: !this.state.edit})


        // if (this.state.edit === true) {
        //     this.setState({edit: false})
        // } else {
        //     this.setState({edit: true})
        // }

    };

    // HandleEditChange = (e, i) => {
    //     const newList = this.state.list;
    //     newList[i] = e.target.value;
    //     this.setState({list: newList})
    // }

    onHandleEditChange = (e) => this.setState({editInput: e.target.value})

    onSubmit = (e) => {
        if (this.state.editInput.length === 0 ) return

        const index = e.currentTarget.name;
        const newList = this.state.list;
        newList[index] = this.state.editInput;
        this.setState({list: newList, editInput: '', edit: false})
    }

    render() {
        return (
            <div>
               <input value={this.state.input} onChange={this.onHandleChange}/>
               <button onClick={this.onHandleClick}>ADD</button>
                <ul>
                    {this.state.list.map((item, index) =>
                        <div>
                            <li style={{display: "inline-block", marginRight: 10}} key={index}>
                                {this.state.edit === true ? <input onChange={this.onHandleEditChange} type="text" defaultValue={item}/> : item}
                            </li>
                            <button onClick={() => this.onDeleteClick(index)}>Delete</button>
                            {this.state.edit ? "" : <button onClick={this.onHandleEdit}>EDIT</button>}
                            {this.state.edit === true ? <button name={index} onClick={this.onSubmit}>SUBMIT</button> : ""}
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default Todo;
