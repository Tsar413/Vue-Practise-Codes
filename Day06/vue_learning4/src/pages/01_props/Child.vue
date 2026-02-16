<template>
  <div class="child">
    <h3>子组件</h3>
	<h4>{{ toy }}</h4>
	<h4>{{ car }}</h4>
	<button @click="sendToy(toy)">把玩具给父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import { ref } from 'vue';
	// 数据
	let toy = ref("A6L")
	// 父传子 声明接受的方法
	defineProps(['car','sendToy'])
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
