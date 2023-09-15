export const ACTION =  {
   ADD_VALUE : 'add-value',
   INCREASE : 'increase',
   DECREASE: 'decrease'
}
export const InitialValue = {
   email:'',
   password:'',
   firstname:'',
   lastName:'',
   category:'',
   quantity:0
}
export const formsReducer = (state, action) => {
    switch(action.type){
     case ACTION.ADD_VALUE:
        console.log(action.payload.name,action.payload.value ,"action")
        return {
            ...state,
            [action.payload.name] : action.payload.value   
        } 
     case ACTION.INCREASE:
       return{
        ...state,
        quantity:state.quantity + 1
       }
       case ACTION.DECREASE:
       return{
        ...state,
        quantity:state.quantity - 1
       }
    default:
        return state
    }
}