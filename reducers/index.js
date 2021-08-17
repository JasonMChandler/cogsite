const initialState = {
  nback: {size:0},
};
//action.payload
//[state.articles[state.articles.length].title]
const rootReducer = (state = initialState, action) => {
	console.log(action.type);
  switch (action.type) {

    case "CLICK":
    console.log("CLICK",action.type);
      return {...state};
    case "NBACK":
    console.log("NBACK",action.payload);
      return {...state, nback:{...state.nback, [action.payload.key]:action.payload.value}};
    default:
    console.log(action.type);
      return state;
  }
};
export default rootReducer;