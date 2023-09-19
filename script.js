    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = []
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => {
            arrayOfTodos = json
            // console.log(arrayOfTodos)

            

        })

        
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = (todos) => {

        const todoList = document.querySelector('#todo-list');
        
        todoList.innerHTML = '';


        console.log('todos', todos)
        for (let i = 0; i < arrayOfTodos.length; i++) {
            let li = document.createElement('li');
            li.textContent = arrayOfTodos[i].title
            
            todoList.appendChild(li);

        }
    }

