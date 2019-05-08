import React, { useReducer, useEffect } from 'react';
import { initialState, reducer, types } from './Reducer';
import axios from 'axios';
const StoreContext = React.createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get(
        'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=music+video&key=AIzaSyBHw8MEdl9dR9Xw_CfjR23mYSBDrcMITS0'
      )
      .then(res => {
        const vidz = res.data.items;
        dispatch({
          type: types.SET_VIDEOS,
          payload: vidz
        });
      });
  }, []);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
