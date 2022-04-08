import React, { useState, useEffect } from 'react'
import { Button, Card, ListGroup, InputGroup, FormControl, } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Todolist() {

    const [Todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("Todos")

        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    })
    const [Todo, setTodo] = useState("")
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});



    function handleEditInputChange(e) {
        setCurrentTodo({ ...currentTodo, text: e.target.value })
        console.log("Current Todo ", currentTodo);
    }
    function handleUpdateTodo(id, updatedTodo) {

        const updatedItem = Todos.map((Todo) => {
            return Todo.id === id ? updatedTodo : Todo;
        });

        setIsEditing(false);
        setTodos(updatedItem);

    }

    function handleDeleteClick(id) {
        const removeItem = Todos.filter((Todo) => {
            return Todo.id !== id
        })

        setTodos(removeItem);
    }

    function handleInput(e) {
        setTodo(e.target.value)
    }
    function handleForm(e) {
        e.preventDefault();

        if (Todo !== "") {
            setTodos([
                ...Todos, {
                    id: Todos.length + 1,
                    text: Todo.trim()
                }
            ])
        }
        setTodo("")
    }
    function handleEditClick(todo) {
        setIsEditing(true);
        setCurrentTodo({ ...todo })
    }




    function handleEditFormSubmit(e) {
        e.preventDefault();

        handleUpdateTodo(currentTodo.id, currentTodo);
    }
    useEffect(() => {
        localStorage.setItem('Todos', JSON.stringify(Todos))
    }, [Todos])




    return (
        <>
            <Card>
                <Card.Body>
                    <h1 className="text-center mb-4">Todo list</h1>
                    {isEditing ? (
                        <form onSubmit={handleEditFormSubmit}>
                            <InputGroup className="mb-3 ">
                                <InputGroup.Text id="basic-addon1">EditTodo:</InputGroup.Text>
                                <FormControl
                                    type="text"
                                    name="editTodo"
                                    placeholder="EditTool"
                                    value={currentTodo.text}
                                    onChange={handleEditInputChange}
                                />
                            </InputGroup>
                        </form>
                    ) : (
                        <form onSubmit={handleForm}>
                            <InputGroup className="mb-3 ">
                                <InputGroup.Text id="basic-addon1">🔴</InputGroup.Text>
                                <FormControl
                                    type="text"
                                    name="todo"
                                    placeholder="Create a new todo!"
                                    value={Todo}
                                    onChange={handleInput}
                                />
                            </InputGroup>
                        </form>
                    )}
                    <ListGroup variant="flush">
                        {Todos.map((Todo) => (
                            <ListGroup.Item key={Todo.id}>
                                <div className="d-flex align-items-center justify-content-between ">
                                    {Todo.text}
                                    <div>
                                    <Button variant="outline-secondary" size="sm" onClick={() => handleEditClick(Todo)}>Edit</Button>
                                    <Button variant="outline-secondary" size="sm" onClick={() => handleDeleteClick(Todo.id)}>Delete</Button>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Link to="/" className="btn btn-primary w-100 mt-3">
                        Back to Dashbord
                    </Link>
                    
                </Card.Body>
            </Card>



        </>
    )
}

export default Todolist
