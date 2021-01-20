const todos = [];

export const reducer = (state = todos, action) => {
    switch(action.type){
        case "ADD_TODO":
            return [...state, action.payload]
        case "DELETE_TODO":
            const newState = state.filter(todo => todo.id !== action.payload);
            return newState;
        case "UPDATE_TODO":
            const tempState = [...state];
            return tempState.map(todo => {
                if(todo.id === action.payload.id){
                    return {...todo, name: action.payload.name}
                }
                return todo;
            })
        default:
            return state;
    }
}