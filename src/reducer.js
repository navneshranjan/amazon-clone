export const initialState = {
  basket: [],
  user: null,
};
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic fod adding to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // logic for removing from basket

      return { state };

    default:
      return state;
  }
}
export default reducer;
