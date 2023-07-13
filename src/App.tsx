import { Header } from './components/Header/Header'
import styles from "./App.module.css"
import plusIcon from "./assets/plus.svg"
import './global.css'
import { ToDoList } from './components/ToDoList/ToDoList'

function App() {
  return (
    <>
		<Header/>
		<div className={styles.wrapper}>
			<div className={styles.addToDo}>
				<input type="text" placeholder='Adicione uma nova tarefa' />
				<button>Criar <img src={plusIcon} /></button>
			</div>
			<ToDoList
			/>
		</div>
    </>
  )
}

export default App
