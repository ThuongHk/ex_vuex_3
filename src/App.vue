<template>
  <div id="app">
   <Navbar/>
   <AddTodo/>
   <Todos/>
  </div>
</template>

<script>

import Todos from './components/Todos.vue'
import Navbar from './components/Navbar.vue'
import AddTodo from './components/AddTodo.vue'
export default {
  name: 'App',
  components: {
    Todos,
    Navbar,
    AddTodo
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
