<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>房产：{{ house }}</h4>
		<button @click="changeToy">修改Child1的玩具</button>
		<button @click="changeComputer">修改Child2的电脑</button>
		<button @click="addBooks($refs)">让书本变多</button>
		<Child1 ref="c1"/>
		<Child2 ref="c2"/>
	</div>
</template>

<script setup lang="ts" name="Father">
	import { ref } from 'vue';
import Child1 from './Child1.vue'
	import Child2 from './Child2.vue'

	let house = ref(4)
	let c1 = ref()
	let c2 = ref()

	function changeToy(){
		c1.value.toy = "小猪佩奇"
	}

	function changeComputer(){
		c2.value.computer = "惠普"
	}

	function addBooks(refs:{[key:string]:any}){
		for (let key in refs) {
			refs[key].book += 3
			
		}
	}

	// 把数据交给外部
	defineExpose({house})

	// 注意点：当访问obj.c的时候，底层会自动读取value属性，因为c是在obj这个响应式对象中的
	/* let obj = reactive({
		a:1,
		b:2,
		c:ref(3)
	})
	let x = ref(4)

	console.log(obj.a)
	console.log(obj.b)
	console.log(obj.c)
	console.log(x) */
	


</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}

	.father button {
		margin-bottom: 10px;
		margin-left: 10px;
	}
</style>

