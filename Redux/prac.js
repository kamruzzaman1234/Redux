/*const {createStore} = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

const initialState = {
    users:["labib"],
    count : 0
}
const addUser = (value)=>{
    return{
        type:ADD_USER,
        payload: value
    }
}

const userCounterReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_USER:
            return{
                users: [...state.users, action.payload],
                count: state.count + action.payload
            }
    }
}

const store = createStore(userCounterReducer);
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addUser("abdulla"));
store.dispatch(addUser("Hamim"))
*/
const {createStore, combineReducers} = require("redux");
//Product-area Start
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT"
//Product area End
//Cart Area Start
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";
//CART AREA END

const initialProduct = {
    products:["Suger","Egg"],
    counterProduct : 1
}
const initialCart = {
    carts: ["shooping cart", "debit cart"],
    cartsNumber : 1
}

const getCart = ()=>{
    return{
        type:GET_CART
    }
}
const addCart = (value)=>{
    return{
        type:ADD_CART,
        payload: value
    }
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

const productReducer = (state=initialProduct, action)=>{
    switch(action.type){
        case GET_PRODUCT:
            return{
                ...state
            };
        case ADD_PRODUCT:
            return{
                products:[...state.products, action.payload],
                counterProduct: state.counterProduct + 1
            }
        default:
            return state
    }
}

const cartReducer = (state=initialCart, action)=>{
    switch(action.type){
        case GET_CART:
            return{
                ...state
            };
        case ADD_CART:
            return{
                carts:[...state.carts, action.payload],
                cartsNumber: state.cartsNumber + 1
            }
            default:
                return state
    }
}
const multilevel = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})
const store = createStore(multilevel);
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(getProduct())
store.dispatch(addProduct("Habiba"))

store.dispatch(getCart())
store.dispatch(addCart("Business Cart"))