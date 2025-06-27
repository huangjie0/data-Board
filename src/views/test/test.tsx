import { ref, defineComponent } from 'vue';

export default defineComponent({
    name:'test',
    setup(_props,_ctx){
        const count = ref(0)
        const increment = () => {
            count.value++;
        };
        const decrement = () => {
            count.value--;
        };

         return () => (
            <div>
                <h1>计数器: {count.value}</h1>
                <button onClick={increment}>增加</button>
                <button onClick={decrement}>减少</button>
            </div>
        );
    }
})