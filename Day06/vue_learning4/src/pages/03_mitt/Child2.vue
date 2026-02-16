<template>
  <div class="child2">
    <h3>子组件2</h3>
	<h4>{{ computer }}</h4>
	<h4>{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import emitter from '@/utils/emitter';
import { ref,onUnmounted } from 'vue';

// 数据
let computer = ref('computer')
let toy = ref('')
// 绑定事件
emitter.on('send-toy', (value:any) => {
	toy.value = value
})

onUnmounted(()=>{
  // 解绑事件
  emitter.off('send-toy')
})
</script>

<style scoped>
	.child2{
		margin-top: 50px;
		background-color: orange;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>