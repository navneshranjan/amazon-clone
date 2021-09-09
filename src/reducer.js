export const initialState = {
  basket: [
    {
      id: "123",
      title: "most powerfull laptop ever",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghiR8faoM5PDgeLuXATOf-aK5VkuiRFDvs3aPi932dkbBMhGthspPE0eUWW7A2A3rmCZrUc7Q&usqp=CAc",
      rating: 5,
      price: 12000,
    },
    {
      id: "124",
      title: "most powerfull laptop ever",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghiR8faoM5PDgeLuXATOf-aK5VkuiRFDvs3aPi932dkbBMhGthspPE0eUWW7A2A3rmCZrUc7Q&usqp=CAc",
      rating: 5,
      price: 55000,
    },
  ],

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

      // we clone the basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exists in basket, remove it}
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove item(id: ${action.id})`);
      }
      return { ...state, basket: newBasket };

    default:
      return { state };
  }
}
export default reducer;
