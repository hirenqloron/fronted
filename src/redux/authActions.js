// authActions.js

export const signup = (userData) => {
    // Implement your signup logic here (e.g., API call)
    // Return an action to be dispatched
    return {
      type: 'SIGNUP_SUCCESS', // You can define your action types
      payload: userData,
    };
  };
  
  export const login = (userData) => {
    // Implement your login logic here (e.g., API call)
    // Return an action to be dispatched
    return {
      type: 'LOGIN_SUCCESS', // You can define your action types
      payload: userData,
    };
  };
  