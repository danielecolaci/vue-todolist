const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: '',
            taskList: [],
            completed: [],
        }
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.taskList.unshift({ text: this.newTask, done: false });
                this.newTask = '';
            } else {
                alert('Please enter valid text!')
            }
        },
        taskDone(index) {
            const completedTask = this.taskList.splice(index, 1)[0];
            completedTask.done = true;
            this.completed.unshift(completedTask);
        },
        taskNotDone(index) {
            const uncompletedTask = this.completed.splice(index, 1)[0];
            uncompletedTask.done = false;
            this.taskList.unshift(uncompletedTask);
        }
    },

    mounted() {




    },


}).mount('#app')