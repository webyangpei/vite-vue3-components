import Hello from "./components/Hello";
const imgSrc = './assets/logo.png';

const App = () => {
	return (
		<div>
			<img alt="Vue logo" src={imgSrc}/>
			<Hello/>
		</div>)
}

export default App;
