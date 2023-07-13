import { Header } from './components/Header/Header'
import styles from "./App.module.css"
import plusIcon from "./assets/plus.svg"
import './global.css'

function App() {
  return (
    <>
		<Header/>
		<div className={styles.wrapper}>
			<div className={styles.addToDo}>
				<input type="text" placeholder='Adicione uma nova tarefa' />
				<button>Criar <img src={plusIcon} /></button>
			</div>
		</div>
    </>
  )
}

export default App
