import styles from "./ListItem.module.css"
import {ReactComponent as TrashIcon} from "../../assets/trash.svg"
import { CheckBox } from "../CheckBox/CheckBox"

interface ListItemProps{
	isCompleted: boolean;
	content: string;
}

export function ListItem({isCompleted, content}:ListItemProps){
	return (
		<div className={styles.listItem}>
			<CheckBox isChecked={isCompleted} />
			{
				isCompleted ?
				<p className={styles.completedToDo}>{content}</p>:
				<p>{content}</p>
			}
			<button>
				<TrashIcon />
			</button>
		</div>
	)
}