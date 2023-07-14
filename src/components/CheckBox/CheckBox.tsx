import styles from "./CheckBox.module.css"

import {ReactComponent as CheckedTrueIcon} from "../../assets/CheckedTrue.svg"
import {ReactComponent as CheckedFalseIcon} from "../../assets/CheckedFalse.svg"

interface CheckBoxProps{
	isChecked: boolean;
	onToggleItemCompletedAt: () => void;
}

export function CheckBox({isChecked, onToggleItemCompletedAt}: CheckBoxProps){
	return (
		<div onClick={onToggleItemCompletedAt}>
			{
				isChecked ?
				<div className={styles.checkBoxChecked}>
					<CheckedTrueIcon/>
				</div> :
				<div className={styles.checkBoxNotChecked}>
					<CheckedFalseIcon/>
				</div>
				
			}
		</div>
	)
}