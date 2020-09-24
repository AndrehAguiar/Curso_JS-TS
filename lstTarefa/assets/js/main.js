document.addEventListener('DOMContentLoaded', function () {

    taskList = function () {

        const container = document.querySelector('.container');
        const title = document.createElement('h1');
        const input = document.createElement('input');
        const ul = document.createElement('ul');
        const button = function () {
            return document.createElement('button');
        }
        const li = function () {
            return document.createElement('li');
        }

        title.innerText = 'Tasks list';

        input.type = 'text';
        input.className = 'criarTarefa';

        const btnNew = button();
        btnNew.className = 'addTask';
        btnNew.innerText = 'Add Task';

        ul.className = 'listTask';

        container.appendChild(title);
        container.appendChild(input);
        container.appendChild(btnNew);
        container.appendChild(ul);

        const criarTarefa = document.querySelector('.criarTarefa');
        const list = document.querySelector('.listTask');

        const addButton = function () {

            const delTask = button();
            delTask.className = 'delete';
            delTask.innerText = 'Delete';
            return delTask;
        }

        const setTask = function (task) {
            itemList = li();
            itemList.innerText = task;
            itemList.appendChild(addButton());
            list.appendChild(itemList);
        }

        const cleanInput = function (input) {
            input.value = '';
            input.focus();
        }

        document.addEventListener('click', function (e) {
            const el = e.target;
            if (el.classList.contains('addTask')) {

                if (!criarTarefa.value) return criarTarefa.focus();
                setTask(criarTarefa.value);
                cleanInput(criarTarefa);
                saveTasks();

            }

            if (el.classList.contains('delete')) {
                el.parentElement.remove();
                saveTasks();
            }
        });

        criarTarefa.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 && criarTarefa.value) {
                setTask(criarTarefa.value);
                cleanInput(criarTarefa);
                saveTasks();
            }
        });

        const saveTasks = function () {
            const itemsTask = list.querySelectorAll('li');
            const lstTasks = [];
            itemsTask.forEach(task => {
                let taskText = task.innerText;
                lstTasks.push(taskText.replace("Delete", '').trim());
            });
            let strTasks = JSON.stringify(lstTasks);
            localStorage.setItem('Tasks', strTasks);
        }
        const readTasks = function () {
            const tasks = localStorage.getItem('Tasks');
            const lstTasks = JSON.parse(tasks);
            
            if (!lstTasks) return;
            lstTasks.forEach(task => {
                setTask(task);
            });
        }
        readTasks();
    }
    taskList();

});
