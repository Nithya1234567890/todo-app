
import { useSelector } from 'react-redux'
import './App.css'
import Input from './components/Input'
import Todo from './components/Todo'

function App() {
  const todos=useSelector((state)=>state.todos);
  console.log(todos);
  return (
    <>
      <div className="flex justify-center bg-violet-300 h-screen w-screen sm:bg-[url('https://cache.desktopnexus.com/thumbseg/1371/1371785-bigthumbnail.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="box sm:m-6 h-fit p-6 rounded-md mt-10 flex flex-col items-center justify-between" style={{backgroundColor:"rgba(125,125,125,50%)"}}>
          <h1 className=' mb-3 text-center text-white font-medium text-4xl sm:mb-6 mt-0'>Manage Your Todos</h1>
          <Input/>
          {todos && todos.map((todo)=>(
            <Todo key={todo.id} text={todo.text} id={todo.id} completed={todo.completed}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
