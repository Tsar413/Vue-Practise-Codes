import { computed, reactive, ref, toRef, toRefs, watch, watchEffect } from 'vue';
import axios from 'axios'

export default function(){
    // 数据
    let dogList = reactive([
        ''
    ])

    async function again(){
        try{
            let result = await axios({
                method: 'get',
                url: 'https://dog.ceo/api/breed/pembroke/images/random'
            })
            dogList.push(result.data.message)
        } catch (error){
            alert(error)
        }
        
    }

    // 向外提供东西
    return {dogList, again}
}
