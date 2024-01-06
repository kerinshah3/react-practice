import React , {useReducer} from "react";

const resetValue = 0
const reducer = (state,action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return resetValue
    }
}

export default function UseReducerHook(){
    let [count , dispatch] = useReducer(reducer,resetValue)


    return(
        <div>
            <button onClick={() => dispatch('increment')}>
                Increase
            </button>
            <button onClick={() => dispatch('decrement')}>
                Decrease
            </button>
            <button onClick={() => dispatch('reset')}>
                Reset to Zero
            </button>
            <h3>
                Count = {count}
            </h3>
        </div>
    )
}