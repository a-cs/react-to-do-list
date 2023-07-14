import styles from "./ToDoList.module.css"

import { EmptyList } from "../EmptyList/EmptyList"
import { ListItem } from "../ListItem/ListItem"

export interface ToDo{
	id?: string;
	isCompleted: boolean;
	content: string;
}

interface ToDoListProps{
	toDolist: ToDo[];
	onDeleteItem: (id?:string) => void;
}

export function ToDoList({toDolist, onDeleteItem}:ToDoListProps){

	const toDoListTotal = toDolist.length
	const toDoListCompletedTotal = toDolist.filter((toDo: ToDo) => toDo.isCompleted).length
	return (
		<>
			<header className={styles.topBar}>
				<div className={styles.createdToDos}>
					<h2>
						Tarefas criadas
					</h2>
					<span>
						{toDoListTotal}
					</span>
				</div>
				<div className={styles.completedToDos}>
					<h2>
						Concluídas
					</h2>
					<span>
						{
							toDoListTotal?
							`${toDoListCompletedTotal} de ${toDoListTotal}`:
							`${toDoListTotal}`
						}
					</span>
				</div>
			</header>
			<main>
				{
					toDolist.length === 0 ?
					<EmptyList/>:
					<>
						{toDolist.map(toDo =>{
							return(
								<ListItem key={toDo.id} isCompleted={toDo.isCompleted} content={toDo.content} onDeleteItem={() => onDeleteItem(toDo.id)}/>
		
							)
						})}
					</>

				}
			</main>
		</>
	)
}