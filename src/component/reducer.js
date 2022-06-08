export const reducer = (state = { count: 0 }, { type, payload }) => {
  switch (type) {
    case "INCREMENT": {
      return { count: state.count + 1 };
    }
    case "DECREMENT": {
      return { count: state.count - 1 };
    }
    case 'add':{
      return {count: state.count + Number(payload)}

    }
    case 'sub':{
      return {count: state.count - payload}
    }
    case "multiply": {
      return { count: state.count * payload };
    }
    case "divide": {
      return { count: state.count / payload };
    }
    case "reset": {
      return { count: 0 };
    }
    default: {
        return state
    }
  }
};
