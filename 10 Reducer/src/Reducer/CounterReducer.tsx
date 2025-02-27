export type counterState = {
    count: number;
}
type  IncrementAction = {type: "INCREMENT"}
type  DecrementAction = {type: "DECREMENT"}
export type CounterAction = IncrementAction| DecrementAction

export const counterReducer  =(state:counterState,action:CounterAction)=>{
    switch (action.type) {
        case "INCREMENT":
             return{count: state.count+1}

             
            break;
            case "DECREMENT":
                return{count: state.count-1}   
    
        default:
            return state;
            break;
    }
}