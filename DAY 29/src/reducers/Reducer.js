export const cityReducer = (state = "Roorkee", action) => {
  if (action.type === "change_city") {
    return action.payload;
  }
  return state;
};

export const dataReducer = (state = {}, action) => {
  if (action.type === "change_data") {
    return action.payload;
  }
  return state;
};

export const themeReducer = (state = true, action) => {
  if (action.type === "toogle_theme") return !state;
  return state;
};
