import{useState} from "react"
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
            <li>comprar despensa
                <button>eliminar</button>
            </li>
            <li>lavar ropa
                <button>eliminar</button>
            </li>
            <li>lavar trastes
                <button>eliminar</button>
            </li>
            <li>caminata matutina
                <button>eliminar</button>
            </li>
            <li>desayuno
                <button>eliminar</button>
            </li>
            <li>ir a trabajar
                <button>eliminar</button>
            </li>
            <li>pasear al perro
                <button>eliminar</button>
            </li>
            
            
        </ul>
      
    </div>
  )
}

export default TodoList
