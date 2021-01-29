import {defineComponent, reactive, SetupContext} from 'vue'

const Hello = defineComponent({
	props: {
		msg: {
			type: String,
			default: ''
		},
		onLoad: {
			type: Function
		}
	},
	setup(props, {emit}: SetupContext) {
		let count = reactive({ value: 0 });
		const { msg } = reactive(props)
		const emitEvent: (...args: any[]) => void = (...args: any[]) => {
			emit('load', count.value)
		}
		const addCount = () => {
			count.value = ++count.value
			emitEvent()
		}
		const authorization = false

		return () => <>
			<h1>{msg}</h1>
			<button onClick={addCount}>count is: {count.value}</button>
			<span>{authorization ? '是' : '否'}</span>
			<div> 测试一下这是什么{count.value}</div>
		</>
	}
})

export default Hello

