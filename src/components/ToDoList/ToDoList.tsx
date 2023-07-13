import styles from "./ToDoList.module.css"

import { EmptyList } from "../EmptyList/EmptyList"
import { ListItem } from "../ListItem/ListItem"

export interface ToDo{
	isCompleted: boolean;
	content: string;
}

interface ToDoListProps{
	toDolist: ToDo[]
}

export function ToDoList({toDolist}:ToDoListProps){
	return (
		<>
			<header className={styles.topBar}>
				<div className={styles.createdToDos}>
					<h2>
						Tarefas criadas
					</h2>
					<span>
						0
					</span>
				</div>
				<div className={styles.completedToDos}>
					<h2>
						Concluídas
					</h2>
					<span>
						0
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
								<ListItem key={toDo.content} isCompleted={toDo.isCompleted} content={toDo.content}/>
		
							)
						})}
					</>

				}
			</main>
		</>
	)
}