import Vue from 'vue';
import VueX from 'vuex';
import axios from 'axios';

Vue.use(VueX)

const storeData = {
    state: {
        todos: [
            {
                id: 1,
                title: 'viec 1',
                completed: true
            },
            {
                id: 2,
                title: 'viec 2',
                completed: false
            },
            {
                id: 3,
                title: 'viec 3',
                completed: false
            }
        ],
        isAuthor: {
            toggleAuthor: true
        }
    },
    actions: {
   async getTodos({commit}){
    try {
        let res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        console.log(res.data)
        commit('GETTODOS', res.data)
    } catch (error) {
        console.log(error)
    }
   }
    },
    mutations: {
        TOGGLE(state) {
     state.isAuthor.toggleAuthor = !state.isAuthor.toggleAuthor
     console.log(state.isAuthor.toggleAuthor)
        },
        DELETE(state, todoId) {
           
            state.todos = state.todos.filter(todo => todo.id != todoId)
        },
        TOGGLECHECKENT(state, todoId) {            
         state.todos = state.todos?.map(todo =>  {
            if(todo.id == todoId) todo.completed = !todo.completed
            return todo
        })
        },
        ADDTODO(state, newTodo){
            console.log(newTodo)
           state.todos.push(newTodo)
        },
        GETTODOS(state, todos){
            state.todos = todos
        }
    }
}

const store = new VueX.Store(storeData)
export default store