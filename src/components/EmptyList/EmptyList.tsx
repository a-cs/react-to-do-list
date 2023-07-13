import styles from "./EmptyList.module.css"

import clipboardIcon from "../../assets/Clipboard.svg"

export function EmptyList(){
	return (
		<div className={styles.emptyToDos}>
			<img src={clipboardIcon} alt="clipboard Icon" />
			<p>
				<strong>Você ainda não tem tarefas cadastradas</strong><br/>
				Crie tarefas e organize seus itens a fazer
			</p>
		</div>
	)
}