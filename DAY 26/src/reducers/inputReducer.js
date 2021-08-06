const inputReducer = (state = [], action) => {
  if (action.type === "NAME_CHANGE") {
    let tmpSt = state;
    tmpSt[0] = action.payload;
    state = [...tmpSt];
  } else if (action.type === "EMAIL_CHANGE") {
    let tmpSt = state;
    console.log(tmpSt);
    tmpSt[1] = action.payload;
    state = [...tmpSt];
  }
  console.log(state);
  return state;
};

export default inputReducer;
