const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: '',
            taskList: [
                { text: 'First Task', done: false },
                { text: 'Second Task', done: false },
            ],
            completed: [
                { text: 'First Task Done', done: true },
            ],
        }
    },
    methods: {

    },

    mounted() {

    },


}).mount('#app')