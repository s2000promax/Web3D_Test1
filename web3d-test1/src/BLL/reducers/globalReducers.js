
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

let initialState = {
    id:null,
    totalValue: 0,
    status: false
}


const globalReducers = (state = initialState, action) => {
    //debugger;
    switch(action.type) {
        case INCREMENT: return {
          id: state.id + 1,
          totalValue: state.totalValue + 1,
          status: !!!state.status
         }
      //  debugger;
        case DECREMENT: return {
          id: state.id + 1,
          totalValue: state.totalValue - 1,
          status: !!!state.status  
        }
      //  debugger;
        default: return state;
      //  debugger;
    }
}

export const IncrementCreator = (state) => { return ({type: INCREMENT, state}) }
export const DecrementCreator = (state) => { return ({type: DECREMENT, state}) }

export default globalReducers;