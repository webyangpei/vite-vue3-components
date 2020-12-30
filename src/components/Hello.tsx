import { defineComponent, ref, toRefs } from 'vue'

const Hello = () => {
	let count = ref(0);
	const addCount = () => {
		console.log(++count.value)
		count = ref(++count.value)
		console.log(count.value, 999)
	}
	const authorization = false;
	return (
		<div>
			{/*<h1>{ msg }</h1>*/}
			<button onClick={addCount}>count is: { count.value }</button>
			<span>{ authorization ? '是' : '否' }</span>
			<div> 测试一下这是什么{ count.value }</div>
		</div>
	)
};

export default Hello;

