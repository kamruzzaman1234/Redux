/*
const {createStore} = require("redux")
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = {
    counter : 0
}

const initialUser = {
    user:[{name:"Labib"}]
}
const increment = ()=>{
    return{
        type:INCREMENT
    }
}

const decrement = ()=>{
    return{
        type:DECREMENT
    }
}

const userInitialOutputReducer = (state=initialState, action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                counter: state.counter + 1
            };
            case DECREMENT:
                return{
                    ...state,
                    counter: state.counter - 1
                };
                default:
                    state
    }
}

//Create Store
const store = createStore(userInitialOutputReducer);
//Subscribe
store.subscribe(()=>{
    console.log(store.getState())
})

//dispatch
store.dispatch(increment())
store.dispatch(decrement())*/
/*
const {createStore} = require("redux")
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialStateCounter = {
    count: 10
}

const incrementUser = ()=>{
    return{
        type:INCREMENT
    }
}
const decrementUser = ()=>{
    return{
        type:DECREMENT
    }
}

const allUserReducer = (state=initialStateCounter,action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count : state.count + 10
            };
        case DECREMENT:
            return{
                ...state,
                count : state.count - 3
            };
            default:
                state
    }
}

const store = createStore(allUserReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementUser())
*/
/*
const {createStore} = require("redux")
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

//state
const initialCounterState = {
    counter : 0
}

//ACTION
const incrementByValue = (value)=>{
    return{
        type:INCREMENT_BY_VALUE,
        payload: value
    }
}
const incrementUser = ()=>{
    return{
        type:INCREMENT
    }
}
const decrementUser = ()=>{
    return{
        type:DECREMENT
    }
}
const resetUser = ()=>{
    return{
        type:RESET
    }
}
//REDUCER
const userAllReducer = (state=initialCounterState, action)=>{
    switch(action.type){
        case INCREMENT_BY_VALUE:
            return{
                ...state,
                counter : state.counter + action.payload
            }
        case INCREMENT:
            return{
                ...state,
                counter: state.counter + 1
            };
        case DECREMENT:
            return{
                ...state,
                counter: state.counter - 1
            };
        case RESET:
            return{
                ...state,
                counter : 0
            };
            default:
                state;

    }
}
//store
const store = createStore(userAllReducer);
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(incrementUser())
store.dispatch(incrementUser())
store.dispatch(decrementUser())
store.dispatch(incrementByValue(40))
store.dispatch(resetUser())
*/

const {createStore} = require("redux")
const ADD_USER = "ADD_USER";

const userInitial = {
    count: 1,
    users: ["Labib"]
}

const userState = (user)=>{
    return{
        type:ADD_USER,
        payload: user
    }
}
const userReducer = (state=userInitial, action)=>{
    switch(action.type){
        case ADD_USER:
            return{
                users: [...state.users, action.payload],
                count: state.count + 1
            }
            default:
                state
    }
}
//store
const store = createStore(userReducer);
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(userState("ladkfj"))

