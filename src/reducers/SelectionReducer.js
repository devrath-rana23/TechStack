export default (state=null, action) => {
  //always have state as first parameter and action as second parameter
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
