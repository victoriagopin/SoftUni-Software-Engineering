function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/tasks/'

    const loadBtn = document.getElementById('load-board-btn');
    const addTaskBtn = document.getElementById('create-task-btn');
    const toDoSection = document.getElementById('todo-section');
    const ulToDo = document.querySelector("#todo-section > ul");
    const progressSection = document.getElementById('in-progress-section');
    const ulProgress = document.querySelector("#in-progress-section > ul");
    const reviewSection = document.getElementById('code-review-section');
    const ulReview = document.querySelector("#code-review-section > ul");
    const doneSection = document.getElementById('done-section');
    const ulDone = document.querySelector("#done-section > ul");
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    
    loadBtn.addEventListener('click', onLoad);
    addTaskBtn.addEventListener('click', onAdd);

    async function onLoad(){
        ulToDo.innerHTML = '';
        ulProgress.innerHTML = '';
        ulReview.innerHTML = '';
        ulDone.innerHTML = '';

        const res = await fetch(baseURL);
        const data = await res.json();
        const tasksArray = Object.values(data);
        
       tasksArray.map((task) => createElement(task.title, task.description, task.status, task._id));
    
    }

    function createElement(title, description, status, taskId){
        const h3El = document.createElement('h3');
        h3El.textContent = title;
        const pEl = document.createElement('p');
        pEl.textContent = description;

        const button = document.createElement('button');

        if(status == 'ToDo'){
            button.textContent = 'Move to In Progress';
        } else if(status == 'In Progress'){
            button.textContent = 'Move to Code Review'
        } else if ( status == 'Code Review'){
            button.textContent = 'Move to Done'
        } else if (status == 'Done'){
            button.textContent = 'Close'
        }


        const liEl = document.createElement('li');
        liEl.classList.add('task');
        liEl.appendChild(h3El);
        liEl.appendChild(pEl);
        liEl.appendChild(button);

        
        if(status == 'ToDo'){
            ulToDo.appendChild(liEl);
        } else if(status == 'In Progress'){
            ulProgress.appendChild(liEl);
        } else if ( status == 'Code Review'){
            ulReview.appendChild(liEl);
        } else if (status == 'Done'){
            ulDone.appendChild(liEl);
        }
        
    }

    async function onAdd(){
        const title = titleInput.value;
        const description = descriptionInput.value;

        clearInputs();

            await fetch(baseURL, {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({title, description, status : 'ToDo'})
        });

        onLoad();
    }


    function clearInputs(){
        titleInput.value = '';
        descriptionInput.value = '';
    }

}

attachEvents();