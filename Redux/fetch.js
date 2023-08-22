/*const {createStore} = require("redux");
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCT ="GET_PRODUCT";

const initialProduct = {
    users:["Mango", "Banana"],
    numberProduct : 1
}

const getProduct = ()=>{
    return{
        type:GET_PRODUCT
    }
}
const addProduct = (value)=>{
    return{
        type:ADD_PRODUCT,
        payload:value
    }
}
//Reducer area start
const addReducer = (state=initialProduct,action)=>{
    switch(action.type){
        case GET_PRODUCT:
            return{
                ...state
            }
        case ADD_PRODUCT:
            return{
                users:[...state.users, action.payload],
                numberProduct: state.numberProduct + 1
            }
        default:
            return state
    }
}

//Store area start
const store = createStore(addReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(getProduct())
store.dispatch(addProduct("Coconut"))
*/
//Create State
const { default: axios } = require("axios");
const {createStore, applyMiddleware} = require("redux");
const thunk = require("redux-thunk").default
const GET_TODO_REQUEST = "GET_TODO_REQUEST";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAILED = "GET_TODO_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

const initialItemsState = {
    items:[],
    isLoading:false,
    error:null
}

//ACTION AREA START

const getItemsRequest = ()=>{
    return{
        type:GET_TODO_REQUEST
    }
}


const getItemSuccess = (item)=>{
    return{
        type:GET_TODO_SUCCESS,
        payload : item
    }
}
const getItemsFailed = (error)=>{
    return{
        type:GET_TODO_FAILED,
        payload: error
    }
}
//Create Reducer

const getAllReducer = (state=initialItemsState, action)=>{
    switch(action.type){
        case GET_TODO_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case GET_TODO_SUCCESS:
            return{
                ...state,
                isLoading: false,
                items: action.payload
            };
        case GET_TODO_FAILED:
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }
        default:
            return state
    }
}
const fetchData = ()=>{
    return(dispatch)=>{
        dispatch(getItemsRequest())
    
        axios.get(API_URL)
        .then(res=>{
            const todo = res.data
            const title = todo.map(todo=> todo.title)
            dispatch(getItemSuccess(title))
        })
        .catch(error =>{
            const faild = error.message
            dispatch(getItemsFailed(faild))
            
        })
        
    }
}
//Create Store 
const store = createStore(getAllReducer, applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(fetchData())
