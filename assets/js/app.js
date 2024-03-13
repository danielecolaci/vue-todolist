const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: '',
            taskList: [
                { text: 'First Task', done: false },
            ],
            completed: [
                { text: 'First Task Done', done: true },
            ],
        }
    },
    methods: {
        addTask() {
            this.taskList.push({ text: this.newTask, done: false });
            this.newTask = '';
        }
    },

    mounted() {

    },


}).mount('#app')