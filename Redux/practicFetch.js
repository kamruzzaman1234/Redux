const {createStore, applyMiddleware} = require("redux");
const thunk = require("redux-thunk").default;
const axios = require('axios');

const GET_REQUEST = "GET_REQUEST";
const GET_SUCCESS = "GET_SUCCESS";
const GET_FAILDE = "GET_FAILED";
const API_USER = "https://jsonplaceholder.typicode.com/todos";

const initialItems = {
    itemsUser:[],
    isLoadingData: false,
    error: null
}

//Action Area start
const getRequestItem = ()=>{
    return{
        type:GET_REQUEST
    }
}
const getSuccessItem = (value)=>{
    return{
        type:GET_SUCCESS,
        payload: value

    }
}
const getFailedItem = (error)=>{
    return{
        type:GET_FAILDE,
        payload: error
    }
}
const itemsReducer = (state=initialItems, action)=>{
    switch(action.type){
        case GET_REQUEST:
            return{
                ...state,
                isLoadingData: true
            };
        case GET_SUCCESS:
            return{
                ...state,
                itemsUser: action.payload,
                isLoadingData:false
            };
        case GET_FAILDE:
            return{
                ...state,
                error: action.payload,
                isLoadingData:false
            }
        default:
            return state
    }
}
const store = createStore(itemsReducer, applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState())
})
const fetchData = ()=>{
    return(dispatch)=>{
        dispatch(getRequestItem())
        axios.get(API_USER)
        .then(res=>{
            console.log(res.data)
            /*
            const todo = res.data
            const title = todo.map(todo=> todo.title)
            dispatch(getSuccessItem(title))
            */
        })
        .catch(error=>{
            const faild = error.message
            dispatch(getFailedItem(faild))
        })
    }
}

store.dispatch(fetchData())