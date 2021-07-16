<!--
 * @Descripttion: 
 * @Author: wmq
 * @Date: 2021-07-14 17:37:27
 * @LastEditTime: 2021-07-14 21:27:16
-->
<script lang="jsx">
import { ref } from 'vue';
export default {
    setup() {
        const count = ref(0);
        const addCount = () => {
            count.value ++;
        }
        return () => (
            <>
                <div>comp</div>
                <p onClick={addCount}>{count.value}</p>
            </>
        )
    }
}
// 原始 jsx
// export default {
//     data() {
//         return {
//             count: 0
//         }
//     },
//     render() {
//         return (
//             <>
//             <div>comp</div>
//             <p onClick={this.addCount}>{this.count}</p>
//             </>
//         )
//     },
//     methods: {
//         addCount(){
//             this.count ++;
//         }
//     },
// }
</script>