import React , {useReducer} from "react";

const resetValue = {
    firstCount: 0,
    secondCount: 0
}
const reducer = (state,action) => {
    switch (action.type) {
        case 'increment':
            return {...state , firstCount: state.firstCount + action.value}
        case 'decrement':
            return {...state , firstCount: state.firstCount - action.value}
        case 'increment2':
            return {...state , secondCount: state.secondCount + action.value}
        case 'decrement2':
            return {...state , secondCount: state.secondCount - action.value}
        case 'reset':
            return resetValue
    }
}

export default function UseReduceWithComplexObject(){
    let [count , dispatch] = useReducer(reducer,resetValue)


    return (
        <div>
        <div>
            <button onClick={() => dispatch({type:'increment', value:1})}>
                Increase
            </button>
            <button onClick={() => dispatch({type:'decrement', value:1})}>
                Decrease
            </button>
            <button onClick={() => dispatch({type:'reset'})}>
                Reset to Zero
            </button>
            <h3>
                Count = {count.firstCount}
            </h3>
        </div>
    <div>
        <button onClick={() => dispatch({type:'increment2', value:5})}>
            Increase
        </button>
        <button onClick={() => dispatch({type:'decrement2', value:5})}>
            Decrease
        </button>
        <button onClick={() => dispatch({type:'reset'})}>
            Reset to Zero
        </button>
        <h3>
            Second Count = {count.secondCount}
        </h3>
    </div>
    </div>
)
}