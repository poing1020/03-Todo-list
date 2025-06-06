import{useState} from "react"
import TodoItem from "./Todoitem"

const TodoList = () => {
    const [inputValue, setInputValue] = useState('')
    const handleAddItem = () => {
        console.log("Nueva tarea:", inputValue)
    } 
  return (
    <div>
        <h1>Lista de Tareas</h1>
        
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={handleAddItem}>agregar</button>
        <ul>
           <TodoItem/>
           <TodoItem/>
           <TodoItem/>
           <TodoItem/>
        
            
        </ul>
      
    </div>
  )
}

export default TodoList
