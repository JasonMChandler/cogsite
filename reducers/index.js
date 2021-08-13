const initialState = {
  nback: {},
};
//action.payload
//[state.articles[state.articles.length].title]
const rootReducer = (state = initialState, action) => {
	console.log(action.type);
  switch (action.type) {

    case "CLICK":
    console.log("CLICK",action.type);
      return {...state};
    default:
    console.log(action.type);
      return state;
  }
};
export default rootReducer;