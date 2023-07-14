import {useState, ChangeEvent, FormEvent, InvalidEvent} from "react"
import {v4 as uuidv4} from 'uuid';

import { Header } from './components/Header/Header'
import { ToDoList, ToDo } from './components/ToDoList/ToDoList'

import {ReactComponent as PlusIcon} from "./assets/plus.svg"

import styles from "./App.module.css"
import './global.css'

function App() {
	const [toDoList, setToDoList] = useState<ToDo[]>([])
	const [newToDoContent, setNewToDoContent] = useState("")
	
	function handleNewToDoContentChange(event: ChangeEvent<HTMLInputElement>){
		event.target.setCustomValidity("")
		setNewToDoContent(event.target.value)
	}
	
	function handleInvalid(event: InvalidEvent<HTMLInputElement>){
		event.target.setCustomValidity("Esse campo é obrigatório")
	}
	
	function handleSubmit(event: FormEvent){
		event.preventDefault()
		const newToDo:ToDo = {
			id: uuidv4(),
			isCompleted: false,
			content: newToDoContent
		}
		setToDoList(previousList => [newToDo, ...previousList])
		setNewToDoContent("")
	}
	
	function deleteToDo(id?: string){
		setToDoList(toDoList.filter((toDo:ToDo) => toDo.id !== id))
	}

	function toggleToDoCompletedAt(id?: string){
		setToDoList(toDoList.map((toDo: ToDo) => toDo.id === id ? {...toDo, isCompleted: !toDo.isCompleted}: toDo))
	}

	return (
	<>
		<Header/>
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit} className={styles.addToDo}>
				<input
				required
				onChange={handleNewToDoContentChange}
				onInvalid={handleInvalid} value={newToDoContent}
				type="text"
				placeholder='Adicione uma nova tarefa'
				/>
				<button type="submit">Criar <PlusIcon /></button>
			</form>
			<ToDoList
			toDolist={toDoList}
			onDeleteItem={deleteToDo}
			onToggleItemCompletedAt={toggleToDoCompletedAt}
			/>
		</div>
	</>
	)
}

export default App
