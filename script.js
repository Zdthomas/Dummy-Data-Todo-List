    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.


    
    // let userId = document.createElement('button');
    
    // userId.textContent = 'Get ToDos for ID';
    // document.body.appendChild(userId);
    
   

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

        const checkbox = document.createElement('input')
       
        
    }
    

    const filterTodos = () => { 

        

        let userId = document.querySelector("userId")
        for (let i = 1; i < userId.length; i++) {
            
        }
          console.log(userId)  
            
    }

    // const completed = () => {
    //   const todoList = true
    //   return todoList.completed
    // }

    // const incompleted =() => {
    //     if(todoList.incompleted) {
    //         return arrayOfTodos = false
    //     }
    // }

    // const result = todoList.filter((todos) => todos.completed)
    // console.log(result)
    

//Tried my best but this has gone over my head even with the lesson book and other sites.
//Hopefully will understand it later.
//Sorry for the incomplete assigment.