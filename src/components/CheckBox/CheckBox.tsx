import styles from "./CheckBox.module.css"

import {ReactComponent as CheckedTrueIcon} from "../../assets/CheckedTrue.svg"
import {ReactComponent as CheckedFalseIcon} from "../../assets/CheckedFalse.svg"

interface CheckBoxProps{
	isChecked: boolean;
}

export function CheckBox({isChecked}: CheckBoxProps){
	return (
		<>
			{
				isChecked ?
				<div className={styles.checkBoxChecked}>
					<CheckedTrueIcon/>
				</div> :
				<div className={styles.checkBoxNotChecked}>
					<CheckedFalseIcon/>
				</div>
				
			}
		</>
	)
}