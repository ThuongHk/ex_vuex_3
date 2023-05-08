<template>
    <div>
        <form
         @submit="addTodo"         >
            <input type="text" v-model="title"/>           
            <input type="submit" value="Submit"/>
        </form>
    </div>
</template>

<script>
import { v4 as uuidv4} from 'uuid'
export default {
    name: 'AddTodo',

    data() {
        return {
            title: ''
        };
    },

   

    methods: {
        
        addTodo(e){  
            e.preventDefault();
           return this.$store.commit('ADDTODO',{
            id: uuidv4(),
            title: this.title,
            completed: false
           })
                 
        
        }
        
    
    },
};
</script>

<style scoped>
form{
    width: 40%;
    margin:auto;
}
</style>