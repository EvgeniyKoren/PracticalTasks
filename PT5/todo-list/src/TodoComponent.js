import React, { Component } from 'react';
import './TodoComponent.css';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            filter: 'All', // "All", "Completed", "Incomplete"
            newTask: ''
        };
    }

    componentDidMount() {
        console.log('TodoApp component mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.tasks !== this.state.tasks || prevState.filter !== this.state.filter) {
            console.log('TodoApp component updated');
        }
    }

    handleInputChange = (event) => {
        this.setState({ newTask: event.target.value });
    }

    addTask = () => {
        if (this.state.newTask.trim() !== '') {
            this.setState((prevState) => ({
                tasks: [...prevState.tasks, { text: prevState.newTask, completed: false }],
                newTask: ''
            }));
        }
    }

    toggleTaskCompletion = (index) => {
        this.setState((prevState) => {
            const newTasks = prevState.tasks.map((task, i) => {
                if (i === index) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
            return { tasks: newTasks };
        });
    }

    deleteTask = (index) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((_, i) => i !== index)
        }));
    }

    setFilter = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { tasks, filter, newTask } = this.state;
        let filteredTasks = tasks;
        if (filter === 'Completed') {
            filteredTasks = tasks.filter(task => task.completed);
        } else if (filter === 'Incomplete') {
            filteredTasks = tasks.filter(task => !task.completed);
        }

        return (
            <div className="todo-app">
                <h1>Todo List</h1>
                <div>
                    <input
                        type="text"
                        value={newTask}
                        onChange={this.handleInputChange}
                        placeholder="Add new task"
                    />
                    <button onClick={this.addTask}>Add</button>
                </div>
                <div className="filters">
                    <button onClick={() => this.setFilter('All')}>All</button>
                    <button onClick={() => this.setFilter('Completed')}>Completed</button>
                    <button onClick={() => this.setFilter('Incomplete')}>Incomplete</button>
                </div>
                <ul>
                    {filteredTasks.map((task, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => this.toggleTaskCompletion(index)}
                            />
                            {task.text}
                            <button onClick={() => this.deleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoApp;