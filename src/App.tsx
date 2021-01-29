import Hello from "./components/Hello";
import {defineComponent, reactive} from 'vue'

const imgSrc = './assets/logo.png';

const App = defineComponent({
	setup: function () {
		const handleClickMe = () => {
			console.log('点我')
		}
		let test = reactive({ value: 23 })
		const getChildContent = (count: any): void => {
			test.value = count
		}
		return () => <div>
			<img alt="Vue logo" src={imgSrc}/>
			<h2>{test.value}</h2>
			<Hello msg="Hello Word!" onLoad={getChildContent}/>
			<button onClick={handleClickMe}>点我！</button>
		</div>
	}
})

export default App;
