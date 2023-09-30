let userInput = prompt("What would you like to do?");

let todoList = [];
while(true){
    if(userInput === 'quit' || userInput === 'q') break;
    if(userInput === 'new'){
        let newTodo = prompt("Enter a new Todo");
        todoList.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if(userInput === 'list'){
        console.log("**********");
        for(let i=0; i<todoList.length; i++){
            console.log(`${i} : ${todoList[i]}`);
        }
        console.log("**********");
    }
    else if(userInput === 'delete'){
        let deleteTodo = parseInt(prompt("Index of the Todo to delete"));
        // If the input is NaN (a string/ null/ undefined) then we'll ask the user to re-enter the index
        while(Number.isNaN(deleteTodo)){
            deleteTodo = parseInt(prompt("Enter a valid index to delete!"));
        }
        // If the index entered by the user is greater than the array length then we'll ask the user to re-enter the index
        while(deleteTodo > todoList.length - 1){
            deleteTodo = parseInt(prompt("Enter a valid index to delete!"));
        }
        // Delete when the index is valid (USING ARRAY.SPLICE METHOD) ---
        const deleted = todoList.splice(deleteTodo, 1);
        console.log(`Ok, deleted : ${deleted}`);
    }

    userInput = prompt("What would you like to do?");
}

console.log("Ok! You quit the app.");