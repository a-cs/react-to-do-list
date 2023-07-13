import {useState} from "react"
import { Header } from './components/Header/Header'
import { ToDoList, ToDo } from './components/ToDoList/ToDoList'

import {ReactComponent as PlusIcon} from "./assets/plus.svg"

import styles from "./App.module.css"
import './global.css'

function App() {
	const [toDoList, setToDoList] = useState<ToDo[]>([])

	return (
	<>
		<Header/>
		<div className={styles.wrapper}>
			<div className={styles.addToDo}>
				<input type="text" placeholder='Adicione uma nova tarefa' />
				<button>Criar <PlusIcon /></button>
			</div>
			<ToDoList
			toDolist={toDoList}
			/>
		</div>
	</>
	)
}

export default App
