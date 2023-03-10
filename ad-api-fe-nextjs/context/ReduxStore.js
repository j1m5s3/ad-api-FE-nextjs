import { createStore } from 'redux';

const initialState = {
  userData: {},
  publicData: {},
  isAuthenticated: false,
  userDataOfFocus: {},
  selector: 'auctions',
  userToken: '',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_DATA':
      return { ...state, userData: action.payload };
    case 'SET_PUBLIC_DATA':
      return { ...state, publicData: action.payload };
    case 'SET_IS_AUTHENTICATED':
      return { ...state, isAuthenticated: action.payload };
    case 'SET_USER_DATA_OF_FOCUS':
      return { ...state, userDataOfFocus: action.payload };
    case 'SET_SELECTOR':
      return { ...state, selector: action.payload };
    case 'SET_USER_TOKEN':
      return { ...state, userToken: action.payload };
    default:
      return state;
  }
}

const store = createStore(rootReducer);
