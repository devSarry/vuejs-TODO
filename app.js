new Vue({

    el: '#tasks',

    data: {
        tasks: [{
            body: 'Enter a task',
            completed: false
        }],
        newTask: ''
    },

    filters: {
        inProcess: function (tasks) {
            console.log("sorting through in process.");
            return tasks.filter(function (task) {
                return !task.completed;
            });
        },

        completedProcess: function (tasks) {
            return tasks.filter(function (task) {
                return task.completed;
            });
        }
    },

    computed: {
        tasksCompleted: function () {
            return this.tasks.filter(function (task) {
                return task.completed;
            });
        },

        tasksRemaining: function () {
            return this.tasks.filter(function (task) {
                return !task.completed;
            });
        }

    },

    methods: {
        addTask: function (e) {
            e.preventDefault();

            if (!this.newTask) return;

            this.tasks.push({
                body: this.newTask,
                completed: false
            });

            this.newTask = '';
        },


        removeTask: function (task) {
            this.tasks.$remove(task);
        },

        editTask: function (task) {
            // remove task
            this.removeTask(task);

            //update the newTask input
            this.newTask = task.body;

            //focus the new task input so the cursor is in the input field
            this.$$.newTask.focus();

        },

        completeTask: function (task) {
            task.completed = true;
        },

        completeAll: function () {
            this.tasks.forEach(function (task) {
                task.completed = true;
            });
        },

        clearCompleted: function () {
            console.log("Trying to clear completed");

            this.tasks = this.tasks.filter(function(task) {
                return ! task.completed;
            });
            console.log("sucess");
        }
    }

});