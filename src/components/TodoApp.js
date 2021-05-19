import React from 'react';
import "../styles/TodoApp.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import actions from '../redux/actions';

function TodoApp(props) {
    return (
        <div className="main">
            <div className="todo-container">
                {/* TODO change title to "Linx Systems Todo" */}
                <Title />
                <TodoForm addItem={props.addItem}/>
                <br/>
                <TodoList items={props.todos} toggleItemStatus={props.toggleItemStatus}/>
            </div>
        </div>
    )
}

function Title({text = "Todo"}) {
    return (
        <h1>{text}</h1>
    )
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        todos: state.todos.list
    };
}

export default connect(mapStateToProps, mapDispatchToProps, null, {})(TodoApp);
