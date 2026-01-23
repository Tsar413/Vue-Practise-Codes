import { computed, onMounted, reactive, ref, toRef, toRefs, watch, watchEffect } from 'vue';
import axios from 'axios'

export default function() {
    // 数据
    let sum = ref(0)
    let bigSum = computed(() => {
        return sum.value * 10
    })


    function add(){
        sum.value++
    }

    onMounted(() => {
        sum.value += 100
    })

    // 向外提供东西
    return {sum, bigSum, add}
}


