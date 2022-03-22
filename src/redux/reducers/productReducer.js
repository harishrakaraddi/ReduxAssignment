const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIALIZE":
      return { ...state, ...payload };
    case "INCREMENT":
      const tempState = state.items;
      tempState[payload].count = tempState[payload].count + 1;
      tempState[payload].totalPrice =
        tempState[payload].price * tempState[payload].count;
      return { ...state, ...tempState };
    case "DECREMENT":
      const tempState1 = state.items;
      if (tempState1[payload].count) {
        tempState1[payload].count = tempState1[payload].count - 1;
        tempState1[payload].totalPrice =
          tempState1[payload].price * tempState1[payload].count;
      }
      return { ...state, ...tempState1 };
    // case "UPDATE_SAVING":
    //   const tempState2 = state.items;
    //   tempState2[payload.i].savingsPrice = payload.price;
    //   return { ...state, ...tempState2 };
    default:
      return state;
  }
};

export default productReducer;
