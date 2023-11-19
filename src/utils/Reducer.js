export const initialState = {
  user: localStorage.getItem('name') ? localStorage.getItem('name') : null,
  membership: null,
  mail: localStorage.getItem('email') ? localStorage.getItem('email') : null,
  student: null,
  amount: 0,
  isaddressChecked: false,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        membership: action.membership,
        amount: action.price,
        student: action.studentType,
      };
    case 'SET_USER':
      return { ...state, user: action.user, mail: action.email };
    case 'SET_ADDRESS':
      return { ...state, isaddressChecked: action.address };

    case 'ADD':
      return { ...state, item: action.item, amount: action.price };
    case 'SET_USER':
      // console.log(action);
      return { ...state, user: action.user };

    default:
      return { ...state };
  }
};

export default Reducer;
