const redux = require ("redux");


const counterReducer = (state = {count:0},action) =>{
  
    if(action.type=="inc"){
        return{
            count:state.count+2
        }
    }
    else if(action.type=="dec"){
        return{
            count:state.count-1
        }
    }

}


const ram = redux.createStore(counterReducer);

ram.dispatch({type:"inc"});
console.log(ram.getState());
ram.dispatch({type:"dec"});
console.log(`fffff`,ram.getState());
