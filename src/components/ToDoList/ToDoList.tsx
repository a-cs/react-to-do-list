import styles from "./ToDoList.module.css"

import { EmptyList } from "../EmptyList/EmptyList"

export function ToDoList(){
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
				<EmptyList/>
			</main>
		</>
	)
}