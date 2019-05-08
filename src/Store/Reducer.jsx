const initialState = {
  search: '',
  vidlist: []
};

const types = {
  SET_TECH_LIST: 'SET_TECH_LIST',
  SET_VIDEOS: 'SET_VIDEOS'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TECH_LIST:
      return { ...state, search: action.payload };
    case types.SET_VIDEOS:
      return { ...state, vidlist: action.payload };
    default:
      throw new Error('Error Happend');
  }
};

export { initialState, reducer, types };
