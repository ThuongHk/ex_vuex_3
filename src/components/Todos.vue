<template>
    <div>
        <div v-if="isAuthor"  class="box">       
     <li v-for="todo in todos" :key="todo.id" class="job mb-2" :class="{completed: todo.completed}">
    <input type="checkbox" :checked="todo.completed" @change="TOGGLECHECKENT(todo.id)"> <span >{{ todo.title }}</span> <button @click="DELETE(todo.id)">Delete</button>
    </li>
    <h3 class="text-center"> Hoàn thành: {{ doneTodos }} </h3>
    </div>
    <h4 v-else class="text-center">Lorem ipsum dolor sit amet.</h4>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

// import { mapState} from 'vuex'
export default{
    name: 'Todos',
   
   computed:{
    todos(){
        return this.$store.state.todos
    },
    doneTodos(){
        return this.$store.state.todos.filter(item => item.completed).length
    },
    isAuthor(){
        return this.$store.state.isAuthor.toggleAuthor
    }
   },
   created() {
    this.getTodos()
   },
  
   methods:{

    ...mapActions([ 'getTodos']),
    ...mapMutations(['DELETE','TOGGLECHECKENT']),
    // deleteTodo(todoId){
    //     return this.$store.commit('DELETE', todoId)
    // },
    // toggleChecken(todoId){
    //     return this.$store.commit('TOGGLECHECKENT', todoId)
    // },
    // getTodos(){
    //     return this.$store.commit('getTodos')
    // }
   }

   
};
</script>

<style>
.box{
    width: 40%;
    margin: auto;
    background-color: gray;

}
li{
    list-style-type: none;
    width: 100%;
    margin: auto;
    float: right;
    background: rgb(234, 231, 231);
}
.job{
    display:flex;
    justify-content: space-between;
}
button{
    /* border-radius: 10px; */
    background: red;
    color: white;
    border: none;
}
.completed{
    background: rgb(33, 193, 230);
    color: white;
}
</style>