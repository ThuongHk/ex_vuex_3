<template>
    <div class="box mb-3">
        <h1 class="text-center">Công việc cần làm</h1>
        <ul>
            <li>About</li>
            <li>Content</li>
            <li @click="toggleOn">Login</li>
            <li>TotalJob: {{ totalJob }} </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Navbar',

    data() {
        return {
            
        };
    },
computed: {
    totalJob() {
        return this.$store.state.todos.length
    }, 
    author(){
        return this.$store.state.isAuthor
    }
},


    methods: {
        toggleOn(){
            return this.$store.commit('TOGGLE')
        }
    },
};
</script>

<style scoped>
.box{
    width: 100%;
    height: 100px;
    background-color: #333;
    color: white;
    margin: auto;

}

ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    background: #333;
    width: 40%;
    margin: auto;
    
}
li{
    background: #333;
    cursor: pointer;

}

</style>