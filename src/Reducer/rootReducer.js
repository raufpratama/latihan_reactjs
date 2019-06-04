const initState = {
    todos:[{
        body: "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        userId: 1
    }]
}

const rootReducer = (state = initState, action) => {
    if(action.type == 'ADD_TODOS') {
        return {
            ...state,
            todos:[...state.todos,...action.todo]
        }
    } else if(action.type=='DELETE_BOOK_DATA') {
        let newState = state.todos.filter(todo=>todo.id!==action.id)
        return {
            ...state,
            todos:newState
        }
    }
    return state;
}

export default rootReducer;